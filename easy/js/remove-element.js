var removeElement = function(nums, val) {
    for(let i=0;i<nums.length;i++) {
        if(nums[i]==val) {
            nums.splice(i,1)
            i--
        }
    }
};
//nums[i]の値がvalと同じ場合
//i番目の値を削除して、i--でループ位置を調整する
