var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = 0
    let str = String(x)
    for(let i=0;i<str.length;i++) {
        sum += Number(str.charAt(i))
    }
    return x%sum==0?sum:-1
};
//xの合計値でx割り切れたらtrueそれ以外は-1返す
//数字できてるの一回文字列にしてループで回して数値にして合計値だす