var findIndices = function(nums, index, val) {
    for(let i=0;i<nums.length;i++) {
        for(let j=0;j<nums.length;j++) {
            if(Math.abs(i-j)>=index&&Math.abs(nums[i]-nums[j])>=val) {
                return [i,j]
            }
        }
    }
    return [-1,-1]
};
//abs(i - j) >= indexDifference, and
//abs(nums[i] - nums[j]) >= valueDifference
//をみたすi,jのくみあわせかえす