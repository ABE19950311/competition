var reverseBits = function(n) {
    let result = 0
    let bit = 32
    while(bit) {
        result *= 2
        result += n & 1
        n = n >> 1
        bit--
    }
    return result
};
//32bit分のbit反転処理を行うため、loop用変数bitに32を代入する
//result *= 2は２をかけることで左に１bitシフトする意味を持っている
//n & 1で引数nの１ビット目を取得し、resultに代入
//n >> 1で引数を右に１bitシフト
//以降、resultは左に１シフトし続けて、1シフト開いた箇所に引数nの末尾bitが入っていく
//引数nの末尾bitを入れた後にresultを左シフトすることで、逆順bitができる
