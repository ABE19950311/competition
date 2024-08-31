var canWinNim = function(n) {
    if(n%4==0) return false
    return true
};
//[0,1,2,3,4]
//[負け、勝ち、勝ち、勝ち、負け]
//４の倍数のとき負ける