var projectionArea = function(grid) {
    let top = 0
    let side = 0
    let front = 0
    let res = 0

    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[i].length;j++) {
            if(grid[i][j]>0) top++;
            if(grid[i][j]>side) side = grid[i][j]
            if(grid[j][i]>front) front = grid[j][i]
        }
        res += top+side+front
        side = 0
        front = 0
        top = 0
    }
    return res
};
//３d立体の上面、正面、横面の面積出す
//上面の数＋正面の数＋横面の数
//上面は0以上なら存在するため、++
//横面は最大行、正面は最大列求める
//１ループ終わったら途中面積代入して値リセット
//前ループするまで続ける