<?php
    // whileサンプル確認
    $data = [];
    $data[0] = mt_rand(0, 100);
    $data[1] = mt_rand(0, 100);
    while(($data[0] + $data[1]) % 2 != 0) {
        $data = [];
        $data[] = mt_rand(0, 100);
        $data[] = mt_rand(0, 100);
    }
    // またはdo-while
    $cnt = 0;
    do {
        $data = [];
        $data[] = mt_rand(0, 100);
        $data[] = mt_rand(0, 100);
        $cnt++;
    } while(($data[0] + $data[1]) % 2 != 0);
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
            <h2 class="bg-primary p-2 text-white">第1問</h2>
            <p>0～100までのランダム生成される整数が格納された配列を加算し、偶数になるまで処理を続行したい。for / foreach / whileのいずれを使うと最も適切か。</p>
            <h3 class="bg-primary p-2 text-white">解答</h3>
            <p>while（do-while）</p>
            <h3 class="bg-primary p-2 text-white">実行例（更新すると値は変化します）</h3>
            <div class="copntainer p-2">
            <?php
                echo "1つ目の値:" . $data[0] . "<br>";
                echo "2つ目の値:" . $data[1] . "<br>";
                echo "合計:" . ($data[0] + $data[1]);
            ?>
            </div>
            <p class="text-danger small"><strong>※ソースは<a href="https://github.com/naho-osada/demo" target="_blank">GitHub</a>にあります。</strong></p>
        </div>
    </div>
    </body>
</html>