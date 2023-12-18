var isPowerOfTwo = function(n) {
    if(n==1) return true
    if(n%2!=0||n==0) {
        return false
    }
    return isPowerOfTwo(n/2)
};
//再起関数使ってnを２で割り続けて2の累乗か判定する
//２の累乗なら、２で割り続けたらいずれ１になるため、trueを返す
//そもそも２で割れない奇数はあまりが0以外になるためfalseを返す
//２で割れても２の累乗じゃない数（６等）があるため
//その場合割り続けたらいずれ小数点以下まで割り続ける（0と判定される）ためn==0ならfalse