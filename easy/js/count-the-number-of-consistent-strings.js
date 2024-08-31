var countConsistentStrings = function(allowed, words) {
    // let res = 0
    // let count = 0
    // for(let i=0;i<words.length;i++) {
    //     for(let j=0;j<words[i].length;j++) {
    //         let reg = new RegExp(words[i][j],"g")
    //         if(!reg.test(allowed)) {
    //             break
    //         } else {
    //             console.log("a")
    //             count++
    //         }
    //     }
    //     if(count==words[i].length) {
    //         res++
    //     }
    //     count = 0
    // }
    // return res
    const reg = new RegExp(`^[${allowed}]+$`)
    let count = 0

    for(let i=0;i<words.length;i++) {
        if(reg.test(words[i])) {
            count++
        }
    }

    return count
};
//各要素がallowedの文字のみで構成されていたらcount
//正規表現使う
// /^[ab]+$/
//先頭がaかbで始まって一回以上末尾まで繰り返す