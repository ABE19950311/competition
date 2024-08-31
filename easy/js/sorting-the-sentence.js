var sortSentence = function(s) {
    let res = []
    let arr = s.split(" ")
    for(let i=0;i<arr.length;i++) {
        let reg = new RegExp(`${i+1}$`)
        for(let j=0;j<arr.length;j++) {
            if(arr[j].match(reg)) {
                res.push(arr[j].slice(0,arr[j].length-1))
            }
        }
    }
    return res.join(" ")
};
//"is2 sentence4 This1 a3"なら
//"This is a sentence"にかえる
//番号正規表現で探して見つかった順に配列pushする
//末尾文字とって対象位置にpushしていく方法もある