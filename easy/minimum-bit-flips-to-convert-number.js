var minBitFlips = function(start, goal) {
    let count = 0
    let twoStart = start.toString(2)
    let twoGoal = goal.toString(2)

    if(twoStart.length>twoGoal.length) {
        twoGoal = twoGoal.padStart(twoStart.length,0)
    } else {
        twoStart = twoStart.padStart(twoGoal.length,0)
    }

    for(let i=0;i<twoStart.length;i++) {
        if(twoStart[i]!=twoGoal[i]) count++
    }

    return count
};
//startからgoalの２進数にかえるとき何回ビット変換が発生するか返す