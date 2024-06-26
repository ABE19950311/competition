var findFinalValue = function(nums, original) {
    // nums.sort((a,b)=>a-b)
    // for(let i=0;i<nums.length;i++) {
    //     if(nums[i]==original) {
    //         original *= 2
    //     }
    // }
    // return original
    while(nums.includes(original)) {
        original *= 2
    }
    return original
};
//originalがnumsにあったらoriginal*2する
//numsに値存在するまで繰り返して最終的な値を返す