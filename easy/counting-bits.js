var countBits = function(n) {
    let result = []
    for(let i=0;i<=n;i++) {
        if(i.toString(2)=="0") {
            result.push(i.toString(2))
        } else {
            result.push(i.toString(2).match(/1/g).length)
        }
    }
    return result
};
//引数までの数字分２進数文字列に変換
//match＋正規表現で1の数を数えてpush
//1の数だとnullを返すため、０のときとそうでないときでわける