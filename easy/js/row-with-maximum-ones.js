var rowAndMaximumOnes = function(mat) {
    let low = 0
    let count = 0
    for(let i=0;i<mat.length;i++) {
        let tmp = 0
        for(let j=0;j<mat[i].length;j++) {
            if(mat[i][j]==1) {
                tmp += 1
            }
        }
        if(tmp>count) {
            low = i
            count = tmp
        }
    }
    return [low,count]
};
//二次元配列各行の１の数数える
//最も１多い行と数返す
//二重ループで普通に数えて値最大なら更新する
//reduce使うのもよい