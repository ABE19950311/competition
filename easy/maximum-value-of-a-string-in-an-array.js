var maximumValue = function(strs) {
    let res = 0
    const reg = /[a-zA-Z]/
    for(let i=0;i<strs.length;i++) {
        if(reg.test(strs[i])) {
            res = Math.max(res,strs[i].length)
        } else {
            res = Math.max(res,Number(strs[i].toString(10)))
        }
    }
    return res
};
//strs[i]に文字含んでたら長さを、数値のみなら１０進数を返す
//最終的に最も大きい値を返す