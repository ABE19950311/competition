var maxAscendingSum = function(nums) {
    let res = 0
    let sum = nums[0]
    for(let i=1;i<nums.length;i++) {
        if(nums[i-1]<nums[i]) {
            sum += nums[i]
        } else {
            res = Math.max(res,sum)
            sum = nums[i]
        }
    }
    return Math.max(res,sum)
};
//文字列で昇順の間合計していく
//昇順じゃなくなったら合計値リセット
//最大合計値を返す