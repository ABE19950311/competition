var addToArrayForm = function(num, k) {
    let val = BigInt(num.join(""))+BigInt(k)
    val = val.toString().split("").map(num => Number(num))
    return val
};
//配列numとkを足した値を配列にして返す
//Numberだと有効桁数たりないのでBigInt使う
//計算結果配列に戻した後文字列配列になってるからmapで全部数値に戻す