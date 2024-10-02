var differenceOfSums = function(n, m) {
    let num1 = 0
    let num2 = 0
    for(let i=1;i<=n;i++) {
        if(i%m==0) {
            num2 += i
        } else {
            num1 += i
        }
    }
    return num1 - num2
};
//1,nの範囲でmで割れる数と割れない数の合計それぞれだして差分を返す