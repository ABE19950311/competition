var findPoisonedDuration = function(timeSeries, duration) {
    let res = duration
    for(let i=1;i<timeSeries.length;i++) {
        res+=Math.min(timeSeries[i]-timeSeries[i-1],duration)
    }
    return res
};
//timeSeriresの値とdurationで最も小さい値を足していく