<?php
    $data[0]['name'] = "村山さん";
    $data[0]['user_id'] = "system_user_01";
    $data[0]['code'] = "system_user_01_code";

    $data[1]['name'] = "里村さん";
    $data[1]['user_id'] = "system_user_02";
    $data[1]['code'] = "system_user_02_code";

    $data[2]['name'] = "田村さん";
    $data[2]['user_id'] = "system_user_03";
    $data[2]['code'] = "system_user_03_code";

    $data[3]['name'] = "鳩村さん";
    $data[3]['user_id'] = "system_user_04";
    $data[3]['code'] = "system_user_04_code";

    $data[4]['name'] = "村谷さん";
    $data[4]['user_id'] = "system_user_05";
    $data[4]['code'] = "system_user_05_code";
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
            <h2 class="bg-primary p-2 text-white">第2問</h2>
            <p>以下の配列データ10個を分解し、それぞれのデータの精査をしたい（名前の文字数、ユーザーIDの半角英数字確認など）。for / foreach / whileのいずれを使うと最も適切か。</p>
            <h3 class="bg-primary p-2 text-white">解答</h3>
            <p>foreach</p>
            <h3 class="bg-primary p-2 text-white">実行例</h3>
            <div class="container p-2">
<?php
    if(!empty($data)) {
        foreach($data as $key=>$ary) {
            echo '<div class="m-2"><p><strong>' . ($key +1) . '番目の配列' . '</strong></p></div>';
            echo '<div class="m-2 mb-4">';
            foreach($ary as $key2=>$d) {
                echo '<div class="p-1">';
                if($key2 == 'name') {
                    echo "お名前:";
                } else if($key2 == 'user_id') {
                    echo "ID:";
                } else if($key2 == 'code') {
                    echo "コード:";
                }
                echo $d . '</div>';
            }
            echo '</div>';
        }
    }
?>
            </div>
            <p class="text-danger small"><strong>※ソースは<a href="https://github.com/naho-osada/demo" target="_blank">GitHub</a>にあります。</strong></p>
        </div>
    </div>
    </body>
</html>