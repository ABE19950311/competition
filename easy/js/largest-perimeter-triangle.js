var largestPerimeter = function(nums) {
    let a = 0 
    let b = 0
    let c = 0
    nums.sort((a,b)=>b-a)
    console.log(nums)
    for(let i=0;i<nums.length;i++) {
        a = nums[i]
        b = nums[i+1]
        c = nums[i+2]
        if(a<b+c) return a+b+c
    }
    return 0
};
//三角形の条件満たす最も大きい周辺長返す a<b+c
//条件満たさないなら０返す
//配列降順でソート
//最も大きい数値から順にa<b+c満たすか確認する
//満たしたらその時点でreturn。値大きい順で確認してるから最大が決定する