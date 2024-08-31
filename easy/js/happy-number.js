var isHappy = function(n) {
    let sum = String(n);
    let result = 0;
    while(sum.length>1) {
        for(let i=0;i<sum.length;i++) {
            result += Number(sum[i])*Number(sum[i])
        }
        sum = String(result)
        result = 0;
    }
    return Number(sum) == 1 || Number(sum) == 7
};
//文字列は添字で値取れる
//引数の数字を文字列にして、長さ分ループ
//各位置の累乗を合計する
//while,forで使うsumを合計値に更新
//forループ終わったら合計算出用の変数を初期化する
