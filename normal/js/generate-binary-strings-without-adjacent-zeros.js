var validStrings = function(n) {
    let len = 2**n
    let reg = /^.*00.*$/
    let res = []

    for(let i=0;i<len;i++) {
        let num = i.toString(2).padStart(n,"0")
        if(!reg.test(num)) {
            res.push(num)
        }
    }

    return res
};
//引数n桁間の２進数で０がとなりあってないやつを全部返す
//桁数合わせるからpadStart使う ループ範囲注意 n=3 3桁 hani 2の３畳　8→0~7(7-0+1)