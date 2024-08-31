var isPowerOfThree = function(n) {
    while(n>1) {
        if(n%3==0) {
            n = n/3
        } else {
            return false
        }
    }
    return n==1
}
//3の累乗なら３で割っていけば最終的に１になるはず
//３の倍数でない数をわって１になったを防ぐため、n%3==0で３の倍数であることを確認してからわる
//割ってる最中に３の倍数でなくなったらfalse
//最終的に１だったらtrue.n==0を弾く意味もある

