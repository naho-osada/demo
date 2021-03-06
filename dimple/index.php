<html>
<head>
	<title>dimple.jsをつかったグラフ描画デモ</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
	<script src="../js/jquery3.3.1.js"></script>
	<script src="./js/d3v4.js"></script>
	<script src="./js/dimplev2.3.0.js"></script>
	<script src="./js/index.js"></script>
	<script src="../js/bootstrap.min.js"></script>
</head>
<body class="bg-light">
	<?php include(dirname(__DIR__) . "/header.php"); ?>
	<div class="container">
		<h1 class="bg-info text-white">dimple.jsをつかったグラフ描画デモ</h1>
		<h2 class="bg-primary text-white" id="circle-h2">エンジニア婦人の一日の消費飲料</h2>
		<div class="container bg-white">
			<div id="circle">
			<p class="text-danger">※1回に飲む量は200ml</p>
			</div>
		</div>
		<h2 class="bg-primary text-white" id="bar-h2">エンジニア婦人の月別ツイート数の推移（2018年）</h2>
		<div class="container bg-white">
			<div id="bar">
			</div>
		</div>
		<h2 class="bg-primary text-white" id="bar-mixed-h2">エンジニア婦人のお小遣い収支（2018年）</h2>
		<div class="container bg-white">
			<div id="bar-mixed">
			<p class="text-danger">※婦人家はお小遣い制</p>
			</div>
		</div>
		<h2 class="bg-primary text-white" id="line-h2">エンジニア婦人のサイトアクセス数の推移（2018年）</h2>
		<div class="container bg-white">
			<div id="line">
			</div>
		</div>
		<h2 class="bg-primary text-white" id="line-mixed-h2">エンジニア婦人のツイート数とプロフィールアクセス数の推移（2018年）</h2>
		<div class="container bg-white">
			<div id="line-mixed">
			</div>
		</div>
	</div>
</body>
</html>