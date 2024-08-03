var distributeCandies = function(n, limit) {
    let res = 0
    for(let i=0;i<=limit;i++) {
        for(let j=0;j<=limit;j++) {
            for(let k=0;k<=limit;k++) {
                if((i+j+k)==n) {
                    res++
                }
            }
        }
    }
    return res
};
//limitの範囲で3人(i,j,k)の合計がnになる全パターン返す
//愚直に多重ループで全パターンみる