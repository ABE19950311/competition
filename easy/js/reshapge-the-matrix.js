var matrixReshape = function(mat, r, c) {
    let arr = mat.flat()
    if(r*c!=arr.length) return mat

    let res = []
    while(arr.length) {
        res.push(arr.splice(0,c))
    }
    return res
};
//flatメソッドで多次元配列を一次元配列にできる
//元配列からr行＊c列の新たな配列作れるなら作る
//r*cが元配列の長さにならなかったら作り変えれないためそのまま返す
//c列ごとに分割して帰り値配列にいれる
