var selfDividingNumbers = function(left, right) {
    // let res = []
    // let str = ""
    // let count = 0
    // for(let i=left;i<=right;i++) {
    //     str = String(i)
    //     for(let j=0;j<str.length;j++) {
    //         if(i%Number(str.charAt(j))!=0) break
    //         count++
    //     }
    //     if(count==str.length) res.push(i)
    //     count = 0
    // }
    // return res
    let res = []
    for(let i=left;i<=right;i++) {
        let num = i
        let valid = true
        while(num>1) {
            let lastNum = num%10
            if(!lastNum||i%lastNum!=0) {
                valid = false
                break
            }
            num = Math.floor(num/10)
        }
        if(valid) {
            res.push(i)
        }
    }
    return res
};
//その数字が含む数字全てで割れたらtrue
//48なら4と8で割ってあまり０だからtrue
//数値を10で割れば一桁目が取れる(48%10=8)
//その数と元々の数(48%8)で割って割れなかったflagfalseにしてループ終わる
//割れたら現在値を10で割れば一桁ずらせる(48/10=4)
//現在値が1未満になるまで続ける
//flagtrueのままならその値はok