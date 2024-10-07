var getSneakyNumbers = function(nums) {
    // let res = []
    // for(let i=0;i<nums.length;i++) {
    //     for(let j=i+1;j<nums.length;j++) {
    //         if(nums[i]==nums[j]) {
    //             if(!res.includes(nums[i])) {
    //                 res.push(nums[i])
    //             } else {
    //                 break
    //             }
    //         }
    //     }
    // }
    // return res
    let num = []
    let dup = []
    for(let i=0;i<nums.length;i++) {
        if(!num.includes(nums[i])) {
            num.push(nums[i])
        } else {
            dup.push(nums[i])
        }
    }
    return dup
};
//ちょうふくしてる数配列でかえす
//一度出てきた数ほかんするはいれつつくって、そこにあったらちょうふくしてるかずとしてpushすればわんるーぷですむ
