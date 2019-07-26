$(function(){
    var count = 0;
    var countMax = Math.floor( Math.random() * 50);

    var canvas = $('#festival');
    if($(window).width() < 800) {
        $('#festival').width($(window).width()-50 + 'px');
    } else {
        $('#festival').width('900px');
    }
    var x = $('#festival').width();
    var y = $('#festival').height();
    canvas[0].width = x;
    canvas[0].height = y;

    //描画コンテキストの取得
    var finish = setInterval(function(){
        drawCircle(canvas, x, y);
        count++;
        if(count >= countMax) {
            clearInterval(finish);
            drawStr(canvas, x, y);
        }
    },300);
});

function drawCircle(canvas, x , y) {
    var color = [
        '#FFFF66',
        '#CCFF99',
        '#FFCCFF',
        '#C299FF',
        '#FF367F',
        '#FF773E',
        '#D0FF43',
        '#60EEFF',
        '#FF77FF',
        '#FF3366',
        '#FFFFE0'];
    var alpha = 0;
    if(canvas[0].getContext) {
        // 塗りつぶしの色
        var colorNo = Math.floor( Math.random() * color.length -1);
        var randX = Math.floor( Math.random() * x);
        var randY = Math.floor( Math.random() * y);
        var randR = Math.floor( Math.random() * 30);

        var finishDraw = setInterval(function(){
            var context = canvas[0].getContext('2d');
            // パスをリセット
            context.beginPath();

            // 円の中心座標
            // 開始角度: 0度 (0 * Math.PI / 180)
            // 終了角度: 360度 (360 * Math.PI / 180)
            // 方向: true=反時計回りの円、false=時計回りの円
            context.arc(randX, randY, randR, 0, Math.PI * 2, true);
            // 色の設定
            context.fillStyle = color[colorNo];
            // 透明度指定
            context.globalAlpha = alpha;
            alpha = alpha + 0.1;

            // 塗りつぶしを実行
            context.fill();

            if(alpha >= 1) {
                clearInterval(finishDraw);
            }
        },100);
    }
}

function drawStr(canvas, x, y) {
    if(canvas[0].getContext) {
        var alpha = 0;
        var fontSize = $(window).width() * 0.08;
        if(fontSize > 40) {
            fontSize = 40;
        }
        fontSize += 'px';
        var canvasStr = 'Canvas Pop';
        var finishStr = setInterval(function(){
            var context = canvas[0].getContext('2d');
            //テキスト描画のスタイルを指定する
            context.fillStyle = "#EEEEEE";
            context.font = fontSize + " 'Italic'";
            context.textAlign = "left";
            context.textBaseline = "top";

            // 透明度指定
            context.globalAlpha = alpha;
            alpha = alpha + 0.1;
            if(alpha >= 1) {
                clearInterval(finishStr);
            }
            context.fillText(canvasStr, x/5, y/4, x);
        }, 100);
    }
}