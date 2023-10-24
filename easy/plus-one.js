var plusOne = function(digits) {
    let result = BigInt(digits.join(""))+BigInt(1)
    return result.toString().split("")
};
//配列をjoinで一つの文字列として連結し、BigInt型に変換
//同様にBigInt型で１を足す
//足した後文字列→配列に戻す
//Numberは最大桁数に引っかかるためBigInt型を使う
