var arithmeticTriplets = function(nums, diff) {
    let res = 0
    for(let i=0;i<nums.length;i++) {
        if(nums.includes(nums[i]+diff)&&nums.includes(nums[i]+diff*2)) {
            res++
        }
    }
    return res
};
//(i, j, k) 
//nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
//のパターン数返す
//nums[i]のdiffとdiff*2の差分存在してれば条件みたすそれだけ以上終わり
