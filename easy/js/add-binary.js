var addBinary = function(a, b) {
    return (BigInt(`0b${a}`)+BigInt(`0b${b}`)).toString(2)
};
//数値の先頭に0bをつけると２進数で表した値として定義できる
