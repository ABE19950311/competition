var smallestEqual = function(nums) {
    // let index = Infinity
    // for(let i=0;i<nums.length;i++) {
    //     let mod = i%10
    //     if(nums[i]==mod) {
    //         index = Math.min(index,i)
    //     }
    // }
    // return index == Infinity ? -1 : index
    for(let i=0;i<nums.length;i++) {
        let mod = i%10
        if(nums[i]==mod) return i
    }
    return -1
};
//0から配列長までを１０で割って余り出すループ処理する
//index位置要素の値と余り一致したらindex返す
//最小値返す　一番最初に見つかったものが最小だからそのままかえせばよい
