var fib = function(n) {
    if(n<2) return n
    let a = 0
    let b = 1
    for(let i=1;i<n;i++) {
        [a,b] = [b,a+b]
    }
    return b
};
//aで加算前、bで加算後を宣言。初期値は0と１
//分割代入で加算前と加算後の計算が簡単にできる
//n=4
//[0,1]=[1,1]
//[1,1]=[1,2]
//[1,2]=[2,3]
//return 3
//011235