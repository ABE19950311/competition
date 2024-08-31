var minCostClimbingStairs = function(cost) {
    let summary = []
    for(let i=0;i<cost.length;i++) {
        if(i<2) {
            summary.push(cost[i])
        } else {
            let num = cost[i]+Math.min(summary[i-1],summary[i-2])
            summary.push(num)
        }
    }
    return Math.min(summary[summary.length-1],summary[summary.length-2])
};
//動的計画法 全体をシンプルに細かく分割する。分割した結果を集計して全体の解につなげる
//１個先か２個先進んだ場合どっちの結果がより少ないかを細かくみていく
//例[1,100,1,1]
//1から２個先進む 2
//100から１個先進む　101
//Math.minで2の方が小さいため結果を入れる
//summary[1,100,2]
//次100から２個先進む 101
//2から１個先進む　3
//3の方が小さい
//summary[1,100,2,3]
//上記を繰り返す