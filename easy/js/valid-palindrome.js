var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,"")
    for(let i=0,j=s.length-1;i<=j;i++,j--) {
        if(s.charAt(i)!==s.charAt(j)) return false
    }
    return true
};
//引数を小文字にして、a-z0-9以外は大文字小文字関係なく除外
//先頭と末尾を同時にループ
//文字見て一致していなかったらfalseを返す