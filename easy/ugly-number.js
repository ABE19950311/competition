var isUgly = function(n) {
    if(n<=0) return false

    while(n!=1) {
        if(n%2==0) {
            n = n/2
        } else if(n%3==0) {
            n = n/3
        } else if(n%5==0) {
            n = n/5
        } else {
            return false
        }
    }
    return true
};
//２、３、５のみで割れる数をさがしたい
//２、３、５で割っていけば最終的に１になるということ
//割れるかどうかは2,3,5であまり０になるかでわかる
