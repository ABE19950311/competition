var alternateDigitSum = function(n) {
    let sum = 0
    let str = String(n)

    for(let i=0;i<str.length;i++) {
        let num = Number(str[i])
        if(i%2==0) {
            sum += num
        } else {
            sum -= num
        }
    }
    return sum
};
//example 521
//偶数位置は＋奇数位置はーしていく
//最終的なsumかえす