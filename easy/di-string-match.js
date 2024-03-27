var diStringMatch = function(s) {
    let min = 0
    let max = s.length
    let res = []
    for(let i=0;i<s.length;i++) {
        if(s.charAt(i)=="I") {
            res.push(min++)
        } else {
            res.push(max--)
        }
    }
    if(s.charAt(s.length-1)=="I") {
        res.push(res[res.length-1]+1)
    } else {
        res.push(res[res.length-1]-1)
    }
    return res
};
//dが数値現象、Iで増加する