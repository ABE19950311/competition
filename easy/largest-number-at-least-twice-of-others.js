var dominantIndex = function(nums) {
    let first = -Infinity
    let second = -Infinity
    let index = -Infinity
    for(let i=0;i<nums.length;i++) {
        if(first<nums[i]) {
            second = first
            first = nums[i]
            index = i
        } else if(second<nums[i]) {
            second = nums[i]
        }
    }
    return first<second*2 ? -1:index
};
//配列の最大値が他の値の２倍以上なら最大値の位置返す
//配列回して最大値出すのはいつもの
//最大値出す最中に２番目に大きい値も出しておく