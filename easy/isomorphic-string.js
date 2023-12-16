var isIsomorphic = function(s, t) {
    for(let i=0;i<s.length;i++) {
        if(s.indexOf(s[i])!=t.indexOf(t[i])) {
            return false
        }
    }
    return true
};
//ahh dee はtrue aに該当するd hに該当するeが同じ数だけ登場しているから
//ahh def はfalse h２回に対しeが１回しかでてないため
//各種文字の登場回数調べて一致したらtrue一致しなかったらfalse
//文字の登場回数調べるのはindexOfメソッド使えばよい
