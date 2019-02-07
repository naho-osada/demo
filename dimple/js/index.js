$(function(){
	circleGraph();
	barGraph();
	barMixedGraph();
	lineGraph();
	lineMixedGraph();
});

/**
 * 円グラフ
 */
circleGraph = function() {
	var svg = dimple.newSvg("#circle", 800, 500);
	var data = [
				{"種類":"コーヒー", "回":3},
				{"種類":"緑茶", "回":2},
				{"種類":"麦茶", "回":8},
				{"種類":"水", "回":2},
				{"種類":"牛乳", "回":1},
				{"種類":"その他", "回":5},
			];
	var chart = new dimple.chart(svg, data);
	// グラフ描画サイズを指定 左の余白、上の余白、グラフ幅、グラフの高さ
	chart.setBounds(50, 50, 500, 400)

	// 円グラフに表示するのは「回数」
	chart.addMeasureAxis("p", "回");
	// 色分けするのは「種類」
	chart.addSeries('種類', dimple.plot.pie);
	chart.addLegend(500, 20, 90, 300, "left");

	chart.draw();
};

/**
 * 横棒グラフ（単一）
 */
barGraph = function() {
	var svg = dimple.newSvg("#bar", 800, 550);
	var data = [
				{"月":"6月", "回数":22},
				{"月":"7月", "回数":197},
				{"月":"8月", "回数":377},
				{"月":"9月", "回数":371},
				{"月":"10月", "回数":319},
				{"月":"11月", "回数":305},
				{"月":"12月", "回数":299},
			];
	var chart = new dimple.chart(svg, data);
	// グラフ描画サイズを指定 左の余白、上の余白、グラフ幅、グラフの高さ
	chart.setBounds(50, 50, 600, 400)

	// x軸が基準となるのは「月」
	chart.addMeasureAxis("x", "回数");
	// y軸で表したいものは「月」
	var y = chart.addCategoryAxis("y", "月");

	// 縦軸yは月降順で表示
	y.addOrderRule(["12月","11月","10月","9月","8月", "7月", "6月"]);

	// グラフを指定 単一の時はnullを指定する
	chart.addSeries(null, dimple.plot.bar);

	chart.draw();
};

/**
 * 縦棒グラフ（複数）
 */
barMixedGraph = function() {
	var svg = dimple.newSvg("#bar-mixed", 800, 550);
	var data = [
				{"月":"9月", "種類":"収入", "金額":18000},
				{"月":"9月", "種類":"支出", "金額":14551},
				{"月":"10月", "種類":"収入", "金額":18000},
				{"月":"10月", "種類":"支出", "金額":32989},
				{"月":"11月", "種類":"収入", "金額":18000},
				{"月":"11月", "種類":"支出", "金額":15668},
				{"月":"12月", "種類":"収入", "金額":18000},
				{"月":"12月", "種類":"支出", "金額":20661},
			];
	var chart = new dimple.chart(svg, data);
	// グラフ描画サイズを指定 左の余白、上の余白、グラフ幅、グラフの高さ
	chart.setBounds(50, 50, 600, 400)

	// x軸が基準となるのは「月」と「種類（収入と支出を棒グラフにしたい）」
	var x = chart.addCategoryAxis("x", ["月", "種類"]);
	// y軸の高さで表したいものは「金額」
	var y = chart.addMeasureAxis("y", "金額");
	// 棒グラフの元データは「収入と支出」なので、「種類」を選択
	// 金額ではない
	var barAxis = chart.addSeries("種類", dimple.plot.bar);

	// 横軸xは月昇順で表示
	x.addOrderRule(["9月", "10月", "11月", "12月"]);
	// 凡例の並びは収入→支出の順で表示
	barAxis.addOrderRule(["収入", "支出"]);
	// 凡例を右に表示
	chart.addLegend(500, 0, 90, 300, "right");
	// 棒の色を指定
	// 複数色がある場合でないと反応しない？
	chart.assignColor("収入", "#5D99FF");
	chart.assignColor("支出", "#FF8856");

	chart.draw();
};

/**
 * 折れ線グラフ
 */
lineGraph = function() {
	var svg = dimple.newSvg("#line", 800, 550);
	var data = [
		{"月":"7月", "ページビュー":374},
		{"月":"8月", "ページビュー":1201},
		{"月":"9月", "ページビュー":602},
		{"月":"10月", "ページビュー":1086},
		{"月":"11月", "ページビュー":1099},
		{"月":"12月", "ページビュー":1615},
	];
	var chart = new dimple.chart(svg, data);
	// グラフ描画サイズを指定 左の余白、上の余白、グラフ幅、グラフの高さ
	chart.setBounds(50, 50, 600, 400)

	// x軸が基準となるのは「月」
	var x = chart.addCategoryAxis("x", "月");
	// y軸の高さで表したいものは「ページビュー」
	chart.addMeasureAxis("y", "ページビュー");

	// 横軸xは月昇順で表示
	x.addOrderRule(["7月","8月","9月","10月", "11月", "12月"]);

	// グラフを指定 単一の時はnullを指定する
	var s = chart.addSeries(null, dimple.plot.line);

	// カーブラインなどのオプションを設定できる
	s.interpolation = "cardinal";
	chart.draw();
};

/**
 * 折れ線グラフ（複数）
 */
lineMixedGraph = function() {
	var svg = dimple.newSvg("#line-mixed", 800, 550);
	var data = [
			{"月":"6月", "種類":"ツイート数", "回数":22},
			{"月":"6月", "種類":"プロフィールアクセス数", "回数":18},
			{"月":"7月", "種類":"ツイート数", "回数":197},
			{"月":"7月", "種類":"プロフィールアクセス数", "回数":888},
			{"月":"8月", "種類":"ツイート数", "回数":377},
			{"月":"8月", "種類":"プロフィールアクセス数", "回数":3372},
			{"月":"9月", "種類":"ツイート数", "回数":371},
			{"月":"9月", "種類":"プロフィールアクセス数", "回数":1674},
			{"月":"10月", "種類":"ツイート数", "回数":319},
			{"月":"10月", "種類":"プロフィールアクセス数", "回数":2000},
			{"月":"11月", "種類":"ツイート数", "回数":305},
			{"月":"11月", "種類":"プロフィールアクセス数", "回数":1742},
			{"月":"12月", "種類":"ツイート数", "回数":299},
			{"月":"12月", "種類":"プロフィールアクセス数", "回数":1023},
		];
	var chart = new dimple.chart(svg, data);
	// グラフ描画サイズを指定 左の余白、上の余白、グラフ幅、グラフの高さ
	chart.setBounds(50, 50, 600, 400)

	// x軸が基準となるのは「月」と「種類（ツイート数とインプレッション数を棒グラフにしたい）」
	var x = chart.addCategoryAxis("x", ["月", "種類"]);
	// y軸の高さで表したいものは「金額」
	var y = chart.addMeasureAxis("y", "回数");
	// 棒グラフの元データは「収入と支出」なので、「種類」を選択
	// 金額ではない
	var barAxis = chart.addSeries("種類", dimple.plot.line);

	// 横軸xは月昇順で表示
	x.addOrderRule(["6月", "7月", "8月", "9月", "10月", "11月", "12月"]);
	// 凡例を右に表示
	chart.addLegend(500, 0, 90, 300, "left");
	// 棒の色を指定
	// 複数色がある場合でないと反応しない？
	chart.assignColor("ツイート数", "#005FFF");
	chart.assignColor("プロフィールアクセス数", "#00AA00");

	chart.draw();
};