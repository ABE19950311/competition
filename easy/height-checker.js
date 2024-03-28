var heightChecker = function(heights) {
    let res = 0
    let expected = heights
    let height = []
    for(let k=0;k<heights.length;k++) {
        height.push(heights[k])
    }
    for(let i=0;i<expected.length;i++) {
        let min = i
        for(let j=i+1;j<expected.length;j++) {
            if(expected[j]<expected[min]) min = j
        }
        let tmp = expected[i]
        expected[i] = expected[min]
        expected[min] = tmp
    }
    for(let i=0;i<height.length;i++) {
        if(height[i]!=expected[i]) res++
    }
    return res
};
//昇順にしたやつと元配列くらべて一致してないやつの数を返す