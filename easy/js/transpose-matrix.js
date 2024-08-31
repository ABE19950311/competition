var transpose = function(matrix) {
    let res = []
    let m = matrix.length
    let n = matrix[0].length

    for(let i=0;i<n;i++) {
        let tmp = []
        for(let j=0;j<m;j++) {
            tmp.push(matrix[j][i])
        }
        res.push(tmp)
    }
    return res
};
//横一列を縦一列に変換
//二重ループで各要素配列の中ではなく、各要素の１番目ずつ、２番目ずつととっていく