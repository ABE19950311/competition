var numOfStrings = function(p, word) {
    let res = 0
    for(let i=0;i<p.length;i++) {
        let reg = new RegExp(`${p[i]}`)
        if(reg.test(word)) {
            res++
        }
    }
    return res
};
//patterns = ["a","abc","bc","d"], word = "abc"
//patterns要素がwordに含まれている数カウントして返す
//含んでるかどうかは正規表現で確認した