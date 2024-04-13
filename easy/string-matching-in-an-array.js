var stringMatching = function(words) {
    let res = []

    for(let a=0;a<words.length;a++) {
        let min = a
        for(let b=a+1;b<words.length;b++) {
            if(words[min].length>words[b].length) {
                min = b
            }
        }
        let tmp = words[a]
        words[a] = words[min]
        words[min] = tmp
    }

    for(let i=0;i<words.length;i++) {
        for(let j=i+1;j<words.length;j++) {
            let reg = new RegExp(words[i])
            if(words[j].match(reg)) {
                res.push(words[i])
            }
        }
    }
    return Array.from(new Set(res))
};
//ある文字がある文字に含まれているものを返す
//正規表現で文字内に含んでるかチェックする
//重複はsetオブジェクトで弾く
