var findWordsContaining = function(words, x) {
    let res = []
    let reg = new RegExp(x,"gi")
    for(let i=0;i<words.length;i++) {
        if(words[i].match(reg)) {
            res.push(i)
        }
    }
    return res
};
//引数xが含まれる要素のindexの一覧の配列を返す