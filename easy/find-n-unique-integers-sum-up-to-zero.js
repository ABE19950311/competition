var sumZero = function(n) {
    let res = []
    if(n%2!=0) {
        res.push(0)
    }
    let i = 1
    while(res.length<n) {
        res.push(i)
        res.push(-i)
        i++
    }
    return res
};
//要素数nで合計が０になる配列返す
//nが奇数なら[0,1,-1,2,-2..]　偶数なら[1,-1,2,-2...]で何個来ても０になる
