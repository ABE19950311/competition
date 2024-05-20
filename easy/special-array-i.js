var isArraySpecial = function(nums) {
    if(nums.length==1) return true
    let val = 0

    for(let i=0;i<nums.length;i+=2) {
        val = nums[i]%2
        if(nums[i+1]&&nums[i+1]%2==val) return false
        if(nums[i+2]&&nums[i+2]%2!=val) return false
    }
    return true
};
//偶数か奇数が連続で続いたらfalseを返す
//現在と一個次２個次のあまりみて連続してるようだったらfalse