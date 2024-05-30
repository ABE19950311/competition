var findPermutationDifference = function(s, t) {
    let res = 0
    for(let i=0;i<s.length;i++) {
        let index = t.indexOf(s[i])
        res += Math.abs(i-index)
    }
    return res
};
//引数sのi番目の文字がtのどこにあるかindex位置調べる
//sのi番目の文字位置ーtのsの文字の位置の絶対値の合計を返す