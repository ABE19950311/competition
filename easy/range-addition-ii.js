var maxCount = function(m, n, ops) {
    let min_col = m
    let min_rec = n
    for(let i=0;i<ops.length;i++) {
        if(ops[i][0]<min_col) min_col = ops[i][0]
        if(ops[i][1]<min_rec) min_rec = ops[i][1]
    }
    return min_col*min_rec
};
//最も値を更新した範囲を求める
//最も値を更新した＝最も狭い範囲
//二次元配列の中で行、列ごとに最小値確認して代入する
//行列かけて範囲を返す