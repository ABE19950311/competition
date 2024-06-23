var sumOfMultiples = function(n) {
    // let res = 0
    // let arr = new Array(n).fill(false)

    // for(let i=2;i<n;i+=3) {
    //     arr[i] = true
    // }
    // for(let i=4;i<n;i+=5) {
    //     arr[i] = true
    // }
    // for(let i=6;i<n;i+=7) {
    //     arr[i] = true
    // }
    // console.log(arr)
    // for(let i=0;i<arr.length;i++) {
    //     if(arr[i]==true) {
    //         res+=i+1
    //     }
    // }
    // return res
    let res = 0
    for(let i=1;i<=n;i++) {
        if(i%3==0||i%5==0||i%7==0) {
            res += i
        }
    }
    return res
};
//nまでの範囲で3,5,7で割れる数の合計返す
//素数判定みたいに範囲の配列作って倍数だったらtrueみたいにしてやったけど
//普通にループで回して3,5,7いずれかで割れたら加算でよかった