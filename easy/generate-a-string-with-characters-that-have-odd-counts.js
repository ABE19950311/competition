var generateTheString = function(n) {
    let res = ""
    if(n%2==0) {
        res += "a"
        n--
    }
    for(let i=0;i<n;i++) {
        res += "b"
    }
    return res
};
//返り値を全てn回かつ奇数の小文字で返す
//n奇数ならそのまま埋める
//偶数なら一文字奇数入れてループ回数調整する