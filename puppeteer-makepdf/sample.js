/**
 * puppeteerを使用して指定のキャプチャを取得し、画像を分割して貼り付けてPDFに出力する
 * ここでは「自サイト（https://engineer-lady.com/）のカテゴリ一覧（https://engineer-lady.com/category/program-lang/ など）から
 * 一覧にある各ページURL（一覧にある https://engineer-lady.com/program_info/create-login-phpunit-laravel7/ など）を取得し、
 * 各ページの特定部分（ここでは本文領域）をキャプチャしてPDF」にするとして作成した
 *
 * 【ここにあること】
 * ・puppeteerのサンプル
 * ・makepdfの使用例（画像貼り付け）
 * ・jimpで画像を加工する（リサイズ、切り抜き）
 * ・同期処理（Promise）
 *
 * ※注意事項※
 * 画像を分割するため、文字の切れや画像の切れは考慮していない
 * もし文字の切れや画像の切れを許容したくないのであれば、すべてをテキストとして取得し、
 * makepdfに沿うように、望むように加工して貼り付ければ良い
 * 改行指定も可能
 * 但しCSSは「ほぼ」使用できず、ウェブページで見たままにするのはとても難しい
 * また、決まった型のページでないと実質不可能
 */
const puppeteer = require('puppeteer');
const jimp = require('jimp');
const fs = require('fs');
const imageSize = require('image-size');
const pdfMake = require('pdfmake');
const { exit } = require('process');

// ▼ makePdf設定 ▼
// 使用するフォント
const fonts = {
    Roboto: {
        normal: 'fonts/ipag.ttf',
        bold: 'fonts/ipag.ttf',
        italics: 'fonts/ipag.ttf',
        bolditalics: 'fonts/ipag.ttf'
    }
};
const printer = new pdfMake(fonts);
// 余白設定
const marginPdf = [5,10,5,30];
// ▲ makePdf設定 ▲

// 取得したキャプチャをリサイズするときのサイズ
const width = 500;
const height = 750;
// 取得したキャプチャとそれを分割した画像の保存先パス
const capPath = './captcha/';
const cropPath = './crop/';
// PDFのファイル名
const pdfFile = './sample.pdf';


// 停止処理（画像切り抜き保存の待ち時間で使用）
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

// ▼ 取得するURLの設定 ▼
const Url = 'URLを指定';
// 複数URLがある場合（Url以降が異なるものを複数取得する）
var UrlList = new Array();
UrlList.push('Url以下のPathを指定');
// ▲ 取得するURLの設定 ▲

// ▼ 取得するDOM要素の設定 ▼
// 環境によってそれぞれ異なります
const target = '.front-box';
// URLリストのターゲット
const targetDom = 'h3>a';
// キャプチャ取得するときに描画待機する場所（キャプチャする領域より下のタグやクラスを指定）
const capArea = '.bread-list';
// キャプチャするDOM要素やIDなど
const capId = 'article';
// ▲ 取得するDOM要素の設定 ▲

/**
 * PuppeteerでターゲットのURLを取得し、ターゲットURLを訪問して指定部分のキャプチャを撮る
 */
const getPuppeteer = new Promise((resolve, reject) => {
    (async() => {
        try{
            // ▼ puppeteer ▼
            const browser = await puppeteer.launch({
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox'],
            });
            const page = await browser.newPage();
            await page.setViewport({width: 1500, height: 10000});
            // タイムアウトなし
            page.setDefaultTimeout(0);
            // キャプチャの保存先ディレクトリの生成確認
            makeDir(capPath);

            // ▼ キャプチャを取得するURLをまとめる ▼
            var targetUrl = new Array();
            for(var i in UrlList) {
                await page.goto(Url + UrlList[i], {waitUntil: ["load", "networkidle2"]});
                // 指定の部分を取得
                await page.waitFor(target)
                // リンクを取得する
                var datas = await page.$$eval(targetDom, hrefs => hrefs.map((a) => {
                    return a.href;
                }));
                for(var i2 in datas) {
                    targetUrl.push(datas[i2]);
                }
            }
            // ▲ キャプチャを取得するURLをまとめる ▲

            // ▼ 取得したURLを元にキャプチャを取得する ▼
            var cnt = 1;
            var capFile = '';
            for(var i in targetUrl) {
                await page.goto(targetUrl[i], {waitUntil: ["load", "networkidle2"]});

                // 指定の部分を取得
                await page.waitFor(capArea);

                const clip = await page.evaluate(s => {
                    const el = document.querySelector(s)

                    // エレメントの高さと位置を取得
                    const { width, height, top: y, left: x } = el.getBoundingClientRect()
                    return { width, height, x, y }
                }, capId);

                capFile = capPath + cnt + '.png';
                await page.screenshot({clip, path: capFile});

                // 取得したキャプチャをリサイズする
                await jimp.read(capFile).then((data) => {
                    data.resize(width, jimp.AUTO).write(capFile);
                }).catch((err) => {
                    console.log(err)
                });
                cnt++;
            }
            // ▲ 取得したURLを元にキャプチャを取得する ▲
            await browser.close();
            resolve();
            // ▲ puppeteer ▲
        } catch(e) {
            console.error('err' + e);
        }
    })();
});

getPuppeteer.then(() => {
    // puppeteerで取得したキャプチャを分割する
    return new Promise((resolve, reject) => {
        (async() => {
            // 分割した保存先ディレクトリの生成確認
            makeDir(cropPath);
            var len = '';
            var files = new Array();
            var capFiles = new Array();

            // 取得するキャプチャファイルリストの生成
            var datas = fs.readdirSync(capPath);
            len = datas.length;
            for(var i=1; i<=len; i++) {
                files.push(capPath + i + '.png');
            }

            // 画像をPDFに貼るための分割処理
            for(var key in files) {
                var size = imageSize(files[key]);
                var imgW = size.width;
                var imgH = size.height;

                // ループ回数
                var loopCnt = Math.ceil(imgH / height);
                var cropH = 0;
                var cropFile = '';
                for(var i=1; i <= loopCnt; i++) {
                    // 画像の分割
                    await jimp.read(files[key]).then((data) => {
                        var img = data;
                        cropFile = key + '-' + i + '.png';
                        img.crop(0, cropH, imgW, height).write(cropPath + cropFile);
                        cropH = i * height;
                        capFiles.push(cropPath + cropFile);
                    }).catch((err) => {
                        console.log(err)
                    });
                }
            }
            resolve(capFiles);
        })();
    });
}).then((capFiles) => {
    // 分割した画像をPDFファイル形式に貼り付けて出力する
    return new Promise((resolve, reject) => {
        (async() => {
            // 前の画像加工処理が終わっていない場合があるので、念のため一時停止する
            var sleepTime = capFiles.length * 200;
            await sleep(sleepTime);

            // PDF本文に画像を設定していく
            var img = new Array();
            var docContents = new Array();
            for(var i in capFiles) {
                img = {image: capFiles[i], margin: marginPdf};
                docContents.push(img);
            }
            var docDefinition = {
                content: docContents
            };
            var pdfDoc = printer.createPdfKitDocument(docDefinition);
            pdfDoc.pipe(fs.createWriteStream(pdfFile));
            pdfDoc.end();
            resolve(sleepTime);
        })();
    });
}).then((sleepTime) => {
    // 使用したキャプチャの削除
    return new Promise((resolve, reject) => {
        (async() => {
            await sleep(sleepTime);
            try {
                var datas = fs.readdirSync(capPath);
                for(var i in datas) {
                    fs.unlinkSync(capPath + datas[i]);
                }

                var datas = fs.readdirSync(cropPath);
                for(var i in datas) {
                    fs.unlinkSync(cropPath + datas[i]);
                }

                resolve();
            } catch (error) {
                throw error;
            }
        })();
    });
}).catch((err) => {
    console.err(err);
    exit(0);
});

/**
 * makeDir
 * 指定パスのディレクトリを生成する
 * 既にディレクトリがある場合は何もしない
 * 再帰的処理は行っていない（1階層のみ）
 * @param path 生成パス
 * @return true
 */
function makeDir(path) {
    if(!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
    return true;
}
