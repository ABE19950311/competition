var longestPalindrome = function(s) {
    let obj = {}
    let res = 0
    for(let i=0;i<s.length;i++) {
        obj[s[i]] ? obj[s[i]] = obj[s[i]]+1:obj[s[i]]=1
        if(obj[s[i]]%2==0) {
            res+=2
        }
    }
    if(s.length>res) {
        return res+1
    } else {
        return res
    }
};
//引数文字列からできる回文の最長なにか
//引数文字と出現頻度をオブジェクトにkeyvalueで詰める
//対象文字が偶数＝回文にできる（aa,bbbb等)ため返り値回文の長さ変数に＋２する
//返り値が引数文字未満なら＋１する　＋１するのは回分の真ん中に一個文字詰めれるから abzba,bbabb等
