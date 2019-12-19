<?php
    // 予めデータを加工する

    // レーダーグラフを描画する
    // パターン数
    $rNum = 5;
    $radarAry = [];
    $radarSAry = [];
    // 各数
    $rCorner = 2;
    for($pI=1; $pI<=$rNum; $pI++) {
        // レーダーグラフのデータ数
        $rCorner++;
        if($rCorner > 10) {
            $radarNum = mt_rand(3, 10);
        } else {
            $radarNum = $rCorner;
        }
        // データ数
        $dataNum = $pI;
        // 比較用データ、2つのグラフと仮定
        $rData = [];
        $rLegend = [];
        for($i=0; $i<$radarNum; $i++) {
            for($i2=0; $i2<$dataNum; $i2++) {
                // 凡例名設定
                $num = $i2+1;
                switch($num) {
                    case 1:
                        $legend = $num . 'st' . '：凡例は配列にしても改行できないよ';
                        break;
                    case 2:
                        $legend = $num . 'nd';
                        break;
                    case 3:
                        $legend = $num . 'rd';
                        break;
                    default:
                        $legend = $num . 'th';
                        break;
                }
                $rData[$legend][] = mt_rand(0, 100);
            }
            $rLegend[] = [sprintf('%02d' . '番目の値', $i+1), '改行するときは配列にするよ'];
            // $rLegend[] = '改行するときは配列にするよ';
        }
        array_push($radarAry, $rData);
        array_push($radarSAry, $rLegend);
    }
?>
<!DOCTYPE html>
<head>
    <title>Chart.jsサンプル</title>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="./css/chart.css" />
    <link rel="stylesheet" type="text/css" href="./css/chart-custom.css" />
    <script src="../js/jquery3.3.1.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="./js/chart.min.js"></script>
    <script src="./js/plugins/chart-data-labels.js"></script>
    <script src="./js/chart-draw.js"></script>
<?php
    // グラフ描画データを複数生成する
    // レーダーグラフのデータ
    foreach($radarAry as $key=>$data) {
?>
    <script type="application/json" id="radar-data<?php echo $key; ?>"><?php echo json_encode($data); ?></script>
<?php
    }
    // レーダーグラフの凡例
    foreach($radarSAry as $key=>$data) {
?>
    <script type="application/json" id="radar-legend<?php echo $key; ?>"><?php echo json_encode($data); ?></script>
<?php
    }
?>
</head>
<body class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand text-white" href="https://wm-web-se-pg.com/">HOME</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link text-light" href="../index.html">demo Top</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="../dimple/index.html">dimple.js（グラフ）</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="../chart/">Chart.js（グラフ）</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="../canvas/index.html">Canvas Pop</a>
            </li>
        </ul>
        </div>
    </nav>
    <div class="container bg-info">
        <h1>Chart.jsサンプル</h1>
        <div class="container mt-3 pb-3 bg-light">
            <h2 class="bg-primary p-3 text-white">レーダーグラフ</h2>
            <p>最低3以上のデータが必要です。</p>
            <p>ページ更新でランダムな値のレーダーチャートを表示します。</p>
            <p class="text-danger">現状、Chart.jsでは凡例の改行はできません。但し、Chart.jsの本体を触れば不可能ではありません。<br>
            どうしてもやりたい場合は是非、チャレンジしてください。</p>
            <input type="hidden" id="radarNum" value="<?php echo count($radarSAry); // レーダーグラフの生成数?>">
            <?php
                $rCnt = 0;
                $max = count($radarSAry);
                while($rCnt <= $max) {
            ?>
            <div class="bg-white m-3"><canvas id="radar-chart<?php echo $rCnt; ?>"></canvas></div>
            <hr />
            <?php
                $rCnt++;
                }
            ?>
        </div>
</body>
</html>
