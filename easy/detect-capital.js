var detectCapitalUse = function(word) {
    return word==word.toUpperCase()||word.slice(1)==word.slice(1).toLowerCase()
}
//引数が全部大文字か、１文字目以外全て小文字ならtrue