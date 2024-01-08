var findComplement = function(num) {
    return parseInt(num.toString(2).split("").map((d)=>Number(!Number(d))).join(""),2)
};
//引数をtoStringで２真数文字列にしてsplitで配列にしてmapで値をNumberで数値にして論理否定演算しで判定してもう一度数値に戻した後配列に戻してparseIntで２真数にもどす
//!0
//論理否定で!の対象がfalseならtrueをtrueならfalseを返す
//jsで0はfalseを示すためtrueを返す
//!1
//同様に１はtrue扱い、論理否定によりfalseが返る
//上記処理でビットの反転ができる
