var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    let time = arrivalTime+delayedTime
    return time>=24?time-24:time
};
//到着時間と遅延時間足した結果かえす
//24時間表記に変換してかえす