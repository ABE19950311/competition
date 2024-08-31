var hammingWeight = function(n) {
    let result = 0
    let bit = 32
    while(bit) {
        if(n&1==1) {
            result++
        }
        n = n >> 1
        bit--
    }
    return result
};
//32bit分ループ
//末尾bitが１ならresult++
//ビット１つ右にずらしてループ