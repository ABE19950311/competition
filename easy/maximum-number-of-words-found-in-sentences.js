var mostWordsFound = function(s) {
    let count = 0
    for(let i=0;i<s.length;i++) {
        let arr = s[i].split(" ")
        count = Math.max(count,arr.length)
    }
    return count
};
//最も長い各要素の単語数を返す