var finalValueAfterOperations = function(o) {
    let count = 0
    for(let i=0;i<o.length;i++) {
        if(o[i].match(/(^\+|\+$)/g)) {
            count++
        } else {
            count--
        }
    }
    return count
};
//++XかX++で＋１--XかX--で−１する
//最終値を返す