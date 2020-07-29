<html>
    <head>
        <title>Canvas Pop</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="./css/board.css" />
        <script src="../js/jquery3.3.1.js"></script>
        <script src="./js/index.js"></script>
        <script src="../js/bootstrap.min.js"></script>
    </head>
    <body class="bg-light">
        <?php include(dirname(__DIR__) . "/header.php"); ?>
        <div class="container">
            <h1 class="bg-info text-white">Canvas Pop</h1>
            <div class="canvas-block"><canvas id="festival" class="canvas-board"></canvas></div>
            <div class="container bg-white">
                <p>canvas要素を用いた、円がポップアップするアニメーションです。javascriptで制御しています。</p>
                <p>canvas領域を画面サイズから計算するので、レスポンシブに対応します。</p>
            </div>
        </div>
    </body>
</html>