var search = function(nums, target) {
    let start = 0
    let end = nums.length-1
    while(start<=end) {
        let mid = Math.floor((start+end)/2)
        if(nums[mid]==target) return mid
        if(nums[mid]>target) {
            end = mid-1
        } else {
            start = mid+1
        }
    }
    return -1
};
//いつもの２分探索
//whileの条件はstart<=endにしないと要素１個だった場合無条件−１返してしまう