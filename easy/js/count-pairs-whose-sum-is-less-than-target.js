var countPairs = function(nums, target) {
    let res = 0
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i]+nums[j]<target) {
                res++
            }
        }
    }
    return res
};
//nums[i]+nums[j]<targetになる要素ペアの合計かえす