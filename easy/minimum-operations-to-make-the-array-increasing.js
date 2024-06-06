var minOperations = function(nums) {
    let res = 0
    for(let i=1;i<nums.length;i++) {
        if(nums[i]<=nums[i-1]) {
            res += nums[i-1]-nums[i]+1
            nums[i] = nums[i-1]+1
        }
    }
    return res
};
//配列の要素が全てnums[i+1]>nums[i]になるまでに足す数の合計を返す