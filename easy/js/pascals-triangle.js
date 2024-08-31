var generate = function(numRows) {
    let result = []
    for(let i=0;i<numRows;i++) {
        result[i] = []
        result[i][0] = 1
        for(let j=1;j<i;j++) {
            result[i][j] = result[i-1][j]+result[i-1][j-1]
        }
        result[i][i] = 1
    }
    return result
};
//for文の中で配列の中に配列を作る
//配列の先頭は必ず1が入るから入れる
//一個前の配列から現在（j）の位置＋一個前のJの位置の要素を足したものを入れていく
//*i=3 [[1],[1,1],[1,2,1]] result[i-1][j]→[2]+result[i-1][j-1]→[1] ＝　３
//j=0 [j+1]でやるとnull計算するため j=1 [j-1]でする
