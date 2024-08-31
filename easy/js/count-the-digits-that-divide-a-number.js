var countDigits = function(num) {
    // let count = 0
    // let str = String(num)
    // for(let i=0;i<str.length;i++) {
    //     if(num%Number(str[i])==0) count++
    // }
    // return count
    let tmpNum = num
    let count = 0
    while(tmpNum) {
        let tmp = tmpNum%10
        if(num%tmp==0) {
            count++
        }
        tmpNum = Math.floor(tmpNum/10)
    }
    return count
};
//numの各桁の値がnumを割れる値カウントして返す
//１０で割って１桁目から確認していけばよい