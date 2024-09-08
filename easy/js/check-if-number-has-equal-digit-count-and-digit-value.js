var digitCount = function(num) {
    // let count = 0
    // for(let i=0;i<num.length;i++) {
    //     for(let j=0;j<num.length;j++) {
    //         if(num[j]==i) {
    //             count++
    //         }
    //     }
    //     if(num[i]!=count) {
    //         return false
    //     }
    //     count = 0
    // }
    // return true
    let count = new Array(10).fill(0)
    
    for(let i=0;i<num.length;i++) {
        count[num[i]]++
    }

    for(let j=0;j<num.length;j++) {
        if(num[j]!=count[j]) {
            return false
        }
    }

    return true
};
//全iがnum[i]の回数だけでてたらtrue
//各数字の数え方は、0-9まで１０要素ぶんの配列つくっておいて
//ループで各数字indexの値＋＋すればわかる