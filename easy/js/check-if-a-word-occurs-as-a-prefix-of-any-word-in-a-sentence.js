var isPrefixOfWord = function(sentence, searchWord) {
    let arr = sentence.split(" ")
    let reg = new RegExp("^"+searchWord)
    for(let i=0;i<arr.length;i++) {
        if(reg.test(arr[i])) {
            return i+1
        }
    }
    return -1
};
//先頭文字から連続してsearchWordに一致する文字列あったらindex返す　なかったらー１
//文字列空白区切りで配列にして正規表現で先頭文字からsearhcWord一致するやつをtestでさがす
