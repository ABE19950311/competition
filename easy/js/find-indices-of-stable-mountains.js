var stableMountains = function(height, threshold) {
    let res = []
    for(let i=1;i<height.length;i++) {
        if(height[i-1]>threshold) {
            res.push(i)
        }
    }
    return res
};
//一個前のindex位置の要素がthresholdより大きかったら今のindexはいれつにつめる
//ひととおりやってはいれつかえす