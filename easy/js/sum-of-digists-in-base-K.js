var sumBase = function(n, k) {
    let sum = 0
    n.toString(k).split("").forEach((data)=>{
        sum += parseInt(data)
    })
    return sum
};
//nをk真数にかえて変えたあとのかずを１０進数として合計かえす