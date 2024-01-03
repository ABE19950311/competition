var arrangeCoins = function(n) {
    let stairs = 0
    while(stairs<=n) {
        n -= stairs
        stairs++
    }
    return stairs-1
};
//段差変数stairs用意
//段差がn以下ループ
//引数から段差分引く
//段差足していく
//n=5
//1     stairs0
//1 2   stairs1
//1 2   stairs2
//      stairs3でstairs>=nでloopend
//段差０からカウントするためstairs-1