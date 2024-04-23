var trimMean = function(arr) {
    const eraseVal = arr.length*0.05
    arr.sort((a,b)=>a-b)
    let sum = 0
    for(let i=0;i<eraseVal;i++) {
        arr.shift()
        arr.pop()
    }
    arr.forEach(data => sum+=data)
    return sum/arr.length
};
//配列要素の最大と最小５％を除く
//配列長に５％かけてでた値分popshiftしたらいい
//配列はソートしておく