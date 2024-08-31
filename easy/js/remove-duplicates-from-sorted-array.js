var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++) {
        if(nums[i]==nums[i+1]) {
            nums.splice(i,1)
            i--
        }
    }
};
//現在の値と一個先の値が同じなら
//spliceメソッドで現在一から一個値を消す。消した後配列が更新される
//参照位置を帳尻合わせるため、ループイテレータ一個減らす