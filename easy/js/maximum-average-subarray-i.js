var findMaxAverage = function(nums, k) {
    let sum = 0
    for(let i=0;i<k;i++) {
        sum += nums[i]
    }
    let max = sum
    for(let j=k;j<nums.length;j++) {
        sum = sum-nums[j-k]+nums[j]
        max = Math.max(max,sum)
    }
    return max/k
};
//k分の合計出す
//各部分配列で最も多い値出す