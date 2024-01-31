var findLHS = function(nums) {
    let map = {}
    let max = 0
    for(let i=0;i<nums.length;i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]]+1:1
    }
    for(const [key,value] of Object.entries(map)) {
        if(map[key-1]) {
            max = Math.max(max,map[key-1]+map[key])
        }
    }
    return max
};
//オブジェクトおよびmapオブジェクトで各数字の出現数カウント
//keyとの差分が１のkeyが存在したら、両方の出現数足してmaxに代入
//最終的に差分が１の値の数が最も多いやつを返す