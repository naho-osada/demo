$(function() {
    // カラーの取得
    var Color = new setColor();

    // レーダーグラフの生成個数を取得
    var num = $('#radarNum').val();
    for(var rI=0; rI<num; rI++) {
        // データの取得
        var radar = new getRData(rI);

        var dataSet = [];
        var cnt = 0;
        for(var lbl in radar.data) {
            var dSetAry = {
                label: lbl,
                // backgroundColor: Color.bg[cnt],// 塗りつぶししない場合は設定不要
                borderColor: Color.bg[cnt],
                fill: false, // 塗りつぶし（する true / しない false）
                data: radar.data[lbl]
            }
            dataSet.push(dSetAry);
            cnt++;
        }

        // 描画先
        var raderCanvas = document.getElementById('radar-chart'+rI).getContext('2d');
        new Chart(raderCanvas, {
            type: 'radar',
            data: {
            labels: radar.legend, // グラフ上の角のポイント
            datasets: dataSet
            },
            options: {
                // グラフタイトル表示
                title: {
                    display: true,
                    fontSize: 16,
                    text: ["レーダーグラフのサンプル（データセット" + cnt + "個)", "タイトルを改行するときは配列にするよ"]
                },
                // 凡例の位置
                legend: {
                    position: 'bottom',
                    fontSize: 14,
                },
                scale :{
                    pointLabels: {
                        // 軸のラベル（ここでは01、02など）
                        fontSize: 14,
                    },
                    ticks: {
                        // 目盛
                        min: 0, // 最小値
                        // max: 10 最大値
                        fontSize: 14,
                        // stepSize: 20, 目盛り間隔。設定しなければ動的割り当てされる。
                    }
                }

            }
        });
    }
});

/**
 * 色の設定
 * setColor
 */
var setColor = function() {
    // グラフ色の設定
    this.bg = ['#FF97C2', '#8EB8FF', '#007700', '#B384FF', '#FFCC00', '#550000', '#CCCCCC', '#800080', '#FF99FF', '#6495ED'];
}

/**
 * レーダーグラフの値の取得
 * getData
 *
 * @param i 何番目のデータを取ってくるのかを明示
 */
var getRData = function(i) {
    var rData = $('#radar-data'+i).html();
    this.data = $.parseJSON(rData);
    var rLegend = $('#radar-legend'+i).html();
    this.legend = $.parseJSON(rLegend);
}
