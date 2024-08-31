var countBinarySubstrings = function(s) {
    let cur = 1
    let prev = 0
    let res = 0
    for(let i=1;i<s.length;i++) {
        if(s.charAt(i)==s.charAt(i-1)) {
            cur++
        } else {
            res += Math.min(cur,prev)
            prev = cur
            cur = 1
        }
    }
    return res += Math.min(cur,prev)
};
//cur 何回同じ文字続いたか
//prev 前回何回つづいたか　
//res 返り値
//cur,prevで小さい方を加算する
//00110011
//00
//11
//0011
//00
//11
//のグループがある
//0011には00と11が含まれる
//ので小さい方を加算する