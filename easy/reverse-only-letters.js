var reverseOnlyLetters = function(s) {
    // let obj = {}
    // for(let i=0;i<s.length;i++) {
    //     if(!s[i].match(/[a-z]/gi)) {
    //         obj[i] = s[i]
    //     }
    // }
    // for(let k=0;k<s.length;k++) {
    //     if(!s[k].match(/[a-z]/gi)) {
    //         s = s.substring(0,k)+s.substring(k+1)
    //         k--
    //     }
    // }
    // let rev = s.split("").join("").split("").reverse().join("")
    // Object.entries(obj).forEach((key)=>{
    //     rev = rev.substring(Number(key[0]),0)+key[1]+rev.substring(Number(key[0]),rev.length)
    // })
    // return rev
    let start = 0
    let end = s.length-1
    let arr = s.split("")
    while(start<end) {
        if(!arr[start].match(/[a-zA-Z]/g)) {
            start++
            continue;
        }
        if(!arr[end].match(/[a-zA-Z]/g)) {
            end--
            continue;
        }
        let tmp = arr[start]
        arr[start] = arr[end]
        arr[end] = tmp
        start++
        end--
    }
    return arr.join("")
};
//アルファベットだけ反転、それ以外は残す
//先頭末尾からポインタ走らせる
//文字列は配列にする
//アルファベットきたら飛ばす
//位置いれかえる。ポインタ進ませる　を繰り返す