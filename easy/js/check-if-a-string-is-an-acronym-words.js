var isAcronym = function(words, s) {
    // let word = ""
    // for(let i=0;i<words.length;i++) {
    //     word += words[i][0]
    // }
    // return s==word
    return words.map((word)=>word[0]).join("")==s
};
//sがwords各要素の頭文字だったらtrue
//map使って各要素の一文字目だけ返して配列再構成したら一行でおkになる
