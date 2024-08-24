var returnToBoundaryCount = function(nums) {
    let count = 0
    let sum = 0
    for(let i=0;i<nums.length;i++) {
        sum += nums[i]
        if(sum==0) {
            count++
        }
    }
    return count
};
//ありがnums[i]のないようにそって右往左往する
//右往左往中に何回０に戻るかかぞえてかえす