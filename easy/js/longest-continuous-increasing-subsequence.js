var findLengthOfLCIS = function(nums) {
    let count = 1
    let max = 0
    for(let i=1;i<nums.length;i++) {
        if(nums[i]>nums[i-1]) {
            count++
        } else {
            max = Math.max(max,count)
            count = 1
        }
    }
    return Math.max(max,count)
};
//一個次の値が現在値より大きい間カウント
//最も大きいカウント返す
//Math.maxで最も大きい値更新していけばよい