var removeDuplicates = function(s) {
    // let arr = s.split("")
    // for(let i=1;i<arr.length;i++) {
    //     if(arr[i]==arr[i-1]) {
    //         arr.splice(i-1,2)
    //         i = 0
    //     }
    // }
    // return arr.join("")
    let res = []
    for(let i=0;i<s.length;i++) {
        if(s[i]!=res[res.length-1]) {
            res.push(s[i])
        } else {
            res.pop()
        }
    }
    return res.join("")
};
//重複してる文字全部消して残ったの返す
//帰り値および重複チェック用配列つくる
//今の文字と配列文字一致してなかったらpush
//同じだったら重複してるのでpopで消す
//最後に残る文字が正となる