var repeatedSubstringPattern = function(s) {
    const repeatStr = s.slice(1,s.length) + s.slice(0,s.length-1)
    return repeatStr.indexOf(s) != -1
};
//引数abcabcに対し
//2文字目から末尾までとる
//s.slice(1,s.length)
//bcabc
//1文字目から末尾一個前までとる
//s.slice(0,s.length-1)
//abcab
//文字列結合することで、繰り返し文字が含まれているか確認できる
//s.slice(1,s.length) + s.slice(0,s.length-1)
//bcabcabcab
//当初の引数abcabcが含まれてるのがわかる