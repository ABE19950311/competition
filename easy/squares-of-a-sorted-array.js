var sortedSquares = function(nums) {
    // let abs = []
    // for(let i=0;i<nums.length;i++) {
    //     abs.push(Math.abs(nums[i]*nums[i]))
    // }
    // for(let j=0;j<abs.length;j++) {
    //     let min = j
    //     for(let k=j+1;k<abs.length;k++) {
    //         if(abs[k]<abs[min]) min = k
    //     }
    //     let tmp = abs[j]
    //     abs[j] = abs[min]
    //     abs[min] = tmp
    // }
    // return abs
    for(let i=0;i<nums.length;i++) {
        nums[i] = nums[i]*nums[i]
    }
    return nums.sort((a,b)=>a-b)
};
//配列要素を２乗して昇順にしたものを返す