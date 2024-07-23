var vowelStrings = function(words, left, right) {
    let count = 0
    let reg = new RegExp(/^[aeiou](.*[aeiou])?$/)
    for(let i=left;i<=right;i++) {
        if(reg.test(words[i])) {
            count++
        }
    }
    return count
};
//母音で始まって終わる単語数返す
//(.*[aeiou])?$で任意文字０回以上続いたあと末尾が終わるパターンと空の場合（１文字の場合）に対応する