<?php
    $data = [];
    for($i=0; $i<30; $i++) {
        $data[] = mt_rand(0,100);
    }
?>
<html>
    <head>
        <title>ループ処理選択クイズ 第1問</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
        <script src="../js/jquery3.3.1.js"></script>
        <script src="../js/bootstrap.min.js"></script>
    </head>
    <body class="bg-light">
    <div class="container bg-info p-3">
        <h1 class="bg-info text-white">ループ処理選択クイズ</h1>
        <div class="container mt-3 p-3 bg-light">
            <h2 class="bg-primary p-2 text-white">第3問</h2>
            <p>配列30個分のランダム数字のデータを格納したあと、出力したい。for / foreach / whileのいずれを使うと最も適切か。</p>
            <h3 class="bg-primary p-2 text-white">解答</h3>
            <p>for、又はforとforeach</p>
            <h3 class="bg-primary p-2 text-white">実行例</h3>
            <h4 class="bg-info p-1 text-white">foreachで出力</h4>
            <div class="container p-2">
<?php
    foreach($data as $d) {
        echo $d . " ";
    }
?>
            </div>
            <h4 class="bg-info p-1 text-white">forで出力</h4>
            <div class="container p-2">
            <p>「30個」と配列の数が決まっているので可能です。</p>
<?php
    for($i=0; $i<30; $i++) {
        echo $data[$i] . " ";
    }
?>
            </div>
            <h4 class="bg-info p-1 text-white">whileで出力</h4>
            <div class="container p-2">
<?php
    $i = 0;
    while(isset($data[$i])) {
        echo $data[$i] . " ";
        $i++;
    }
?>
            </div>
            <p class="text-danger small"><strong>※ソースは<a href="https://github.com/naho-osada/demo" target="_blank">GitHub</a>にあります。</strong></p>
        </div>
    </div>
    </body>
</html>