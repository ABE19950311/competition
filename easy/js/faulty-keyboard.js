var finalString = function(s) {
    let res = []
    for(let i=0;i<s.length;i++) {
        if(s[i]=="i") {
            res = res.reverse()
        } else {
            res.push(s[i])
        }
    }
    return res.join("")
};
//iがきたら既存文字列反転それ以外は普通に文字追加する
//reverseメソッドで手軽に反転できる。配列に対して使う
//最初から配列用意＋追加反転処理して、返すときに文字列にしたら効率良い
