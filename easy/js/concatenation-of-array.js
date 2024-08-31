var getConcatenation = function(nums) {
    //eturn nums.concat(nums)
    let res = []
    for(let i=0;i<nums.length;i++) {
        res[i] = nums[i]
        res[i+nums.length] = nums[i]
    }
    return res
};
//numsを連結して返すおわり