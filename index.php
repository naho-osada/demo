<html>
<head>
    <title>エンジニア婦人の公開デモページ</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.css" />
    <script src="./js/jquery3.3.1.js"></script>
    <script src="./js/bootstrap.min.js"></script>
</head>
<body class="bg-light">
    <?php include(dirname(__DIR__) . "/demo/header.php"); ?>
    <div class="container">
        <h1 class="bg-info text-white">エンジニア婦人の公開デモページ</h1>
        <div class="container bg-white">
            <p>私が作った公開中のデモページの一覧です。</p>
            <div class="container">
                <ul>
                    <li><a href="./chart/">グラフ描画javascript-Chart.js（2019/12/19公開）</a></li>
                    <li><a href="./canvas/index.html">canvas描画アニメーション（2019/7/26公開）</a></li>
                    <li><a href="./dimple/index.html">グラフ描画javascript-dimple.js（2019/2/7公開）</a>&nbsp;<span class="text-danger">スマートフォンで閲覧する場合、グラフが綺麗に表示されないことがあります。</span></li>
                </ul>
            </div>
            <p><strong><a href="https://github.com/naho-osada/demo" target="_blank">GitHubでソースを公開しています。</a></strong></p>
            <p class="text-danger">※今後も公開予定です。</p>
        </div>
    </div>
</body>
</html>