var toGoatLatin = function(s) {
    let split = s.split(" ")
    let res = []
    for(let i=0;i<split.length;i++) {
        let tmp = split[i]
        if(split[i].charAt(0).match(/[aiueo]/i)) {
            tmp += "ma"
        } else {
            let del = tmp[0]
            tmp = tmp.slice(1,tmp.length)
            tmp += del+"ma"
        }
        for(let j=0;j<=i;j++) {
            tmp += "a"
        }
        res.push(tmp)
    }
    return res.join(" ")
};
//単語が母音で始まったら末尾にmaと先頭から数えた位置分aをつける
//子音は先頭文字一個消して末尾にいれてmaとaを同様につける
//先頭文字に対してmatchで正規表現いれてる
//先頭文字削除はsliceつかってる