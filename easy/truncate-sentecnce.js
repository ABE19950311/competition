var truncateSentence = function(s, k) {
    // let res = ""
    // let arr = s.split(" ")
    // for(let i=0;i<k;i++) {
    //     res += arr[i] + " "
    // }
    // return res.trim()
    let arr = s.split(" ")
    return arr.slice(0,k).join(" ")
};
//空白区切りでk分文字返す