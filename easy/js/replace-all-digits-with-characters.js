var replaceDigits = function(s) {
    let res = ""
    for(let i=0;i<s.length;i++) {
        if(i%2!=0) {
            res += String.fromCharCode(s[i-1].charCodeAt()+Number(s[i]))
        } else {
            res += s[i]
        }
    }
    return res
};
//偶数番目の文字を奇数版目の値分ずらして再出力する
//文字コードに奇数番目の文字たせばいい
//charCodeAtとString.fromCharCodeでできる