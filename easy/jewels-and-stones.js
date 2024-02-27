var numJewelsInStones = function(j, stones) {
    let jew = {}
    let res = 0
    for(let i=0;i<j.length;i++) {
        jew[j[i]] = 0
    }
    for(let j=0;j<stones.length;j++) {
        if(jew.hasOwnProperty(stones[j])) {
            res++
        }
    }
    return res
};
//文字をオブジェクトに集めてhasOwnPropertyで確認する