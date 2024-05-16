var minOperations = function(nums, k) {
    // let arr = []
    // for(let i=0;i<nums.length;i++) {
    //     if(nums[i]<k) {
    //         arr.push(nums[i])
    //     }
    // }
    // return arr.length
    let count = 0
    for(let i=0;i<nums.length;i++) {
        if(nums[i]<k) {
            count++
        }
    }
    return count
};
//配列でk未満の要素を何回取り除けばよいか回数返す
//nums[i]<kの要素を別配列にpushして長さ返すか
//単純にnums[i]<kの数数えて返せば良い