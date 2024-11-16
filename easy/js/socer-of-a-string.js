var scoreOfString = function(s) {
    let sum = 0

    for(let i=1;i<s.length;i++) {
        let abs = Math.abs(s[i-1].charCodeAt()-s[i].charCodeAt())
        sum += abs
    }

    return sum
};
// 文字列のスコアは、隣接する文字のASCII値の差の絶対値の合計として定義される。
// s のスコアを返す。 by deepl
// 普通にcharCodeAtで値とって絶対値たしていく