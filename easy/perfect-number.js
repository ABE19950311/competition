var checkPerfectNumber = function(num) {
    let sum = 0
    for(let i=1;i<=num/2;i++) {
        if(num%i==0) {
            sum += i
        }
    }
    return sum==num
}
//numの約数足していってnumになったらOK
//for文で１からnum/2までループ（約数調べるため）
//ループイテレータで割った余りが０なら約数のためsumに加算する
