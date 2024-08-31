var hammingDistance = function(x, y) {
    return (x^y).toString(2).replace(/0/g,"").length
};
//0と１が一致しないビット数を数える
//x^yでXORとって２進数に変えた後に0消して残った１の数返せば良い
