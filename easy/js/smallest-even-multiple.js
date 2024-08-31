var smallestEvenMultiple = function(n) {
    if(n%2==0) {
        return n
    } else {
        return n*2
    }
};
//nと２両方の倍数の最小を返す
//nが2で割れる（偶数）時点でn自身が最小の倍数
//奇数でも2かけたら偶数になるからその時点でnと２の最小の倍数になる