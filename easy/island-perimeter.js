var islandPerimeter = function(grid) {
    const maxRows = grid.length
    const maxCols = grid[0].length
    let strip = 0
    for(let row=0;row<maxRows;row++) {
        for(let col=0;col<maxCols;col++) {
            if(grid[row][col]==0) continue
            strip += 4
            if(row>0&&grid[row-1][col]) strip-=1
            if(col>0&&grid[row][col-1]) strip-=1
            if(row<maxRows-1&&grid[row+1][col]) strip-=1
            if(col<maxCols-1&&grid[row][col+1]) strip-=1
        }
    }
    return strip
};
//gird[i][j]
//grid[i]がrow
//grid[0][j]がclolumn
//0 1 0
//1 1 1
//0 1 0
//各二次元配列値の０が水面、１が島を表す
//水面は見なくて良いためcontinueでスキップする
//島だったらstrip+=4しておく
//各if文で上下左右に島が存在してるか確認して、あったら-1する
// if(row>0&&grid[row-1][col]) strip-=1 上に島が存在するかチェック
// if(col>0&&grid[row][col-1]) strip-=1 左に島が存在するかチェック
// if(row<maxRows-1&&grid[row+1][col]) strip-=1 下に島が存在するかチェック maxRowsと比較して現在値が端でないか確認する
// if(col<maxCols-1&&grid[row][col+1]) strip-=1 右に島が存在するかチェック maxColsと比較して端チェックする
