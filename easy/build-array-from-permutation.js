var buildArray = function(nums) {
    // let arr = []
    // for(let i=0;i<nums.length;i++) {
    //     arr.push(nums[nums[i]])
    // }
    // return arr
    return nums.map(num => nums[num])
};
//配列の各要素の値の位置の要素をとるようにして返す