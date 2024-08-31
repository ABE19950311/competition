var leftRightDifference = function(nums) {
    let left = 0
    let right = 0
    let res = []

    for(let i=0;i<nums.length;i++) {
        right += nums[i]
    }

    for(let j=0;j<nums.length;j++) {
        right -= nums[j]
        res.push(Math.abs(left-right))
        left += nums[j]
    }
    return res
};
//left,right合計の絶対値リストを返す
//全隊の合計値だしてから各要素との差分をとっていく→left