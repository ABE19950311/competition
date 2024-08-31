var isSameAfterReversals = function(num) {
    if(num==0) return true
    if(num%10==0) return false
    return true
};
//num反転したものをもう一回反転してnumに戻ったらtrue
//0081のようになったら81になる
//つまり末尾に０があったらnumと一致しなくなる
//末尾０は10で割った余りが０かどうかで判別できる
//0は例外で返す