var minCostToMoveChips = function(p) {
    let even = 0
    let odd = 0
    p.forEach((data)=>{
        if(data%2==0) {
            even++
        } else {
            odd++
        }
    })
    return Math.min(even,odd)
};
//偶数から偶数、奇数から奇数はコスト０.違い違いはコスト１
//前コインの偶数か奇数枚数を調べて、枚数少ない方がコストも少ないのでそれを返す
