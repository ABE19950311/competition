var backspaceCompare = function(s, t) {
    // for(let i=1;i<s.length;i++) {
    //     if(s.charAt(i)=="#") {
    //         s = s.substring(0,i-1)+s.substring(i+1)
    //         i=0
    //     }
    // }
    // for(let j=1;j<t.length;j++) {
    //     if(t.charAt(j)=="#") {
    //         t = t.substring(0,j-1)+t.substring(j+1)
    //         j=0
    //     }
    // }
    // return s.replace(/#/g,"")==t.replace(/#/g,"")
    s = s.split("")
    t = t.split("")

    let delBackSpaceS = getDelBackSpaceArray(s)
    let delBackSpaceT = getDelBackSpaceArray(t)

    return delBackSpaceS == delBackSpaceT
};

function getDelBackSpaceArray(arr) {
    let res = []
    for(let i=0;i<arr.length;i++) {
        if(arr[i]=="#") {
            res.pop()
        } else {
            res.push(arr[i])
        }
    }
    return res.join("")
}
//文字列に#あったら直前の文字けして２つの文字列一致してたらtrue
//一度配列にする。stack用意する.#だったらpopして直前の文字消す処理する.それ以外はstackに文字入れる
//できたstackを文字列にして返す