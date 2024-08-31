var minSubsequence = function(nums) {
    // nums.sort((a,b)=>b-a)
    // let res = [nums[0]]
    // let sum = nums[0]
    // let check = 0
    // let point = 0
    // for(let i=nums.length-1;i>point;i--) {
    //     check += nums[i]
    //     console.log(check)
    //     if(sum<=check) {
    //         point++
    //         res.push(nums[point])
    //         sum += nums[point]
    //         i = nums.length
    //         check = 0
    //     }
    // }
    // return res
    nums.sort((a,b)=>b-a)
    let res = []
    let sum = 0
    let current  = 0
    for(let i=0;i<nums.length;i++) {
        sum += nums[i]
    }
    for(let j=0;j<nums.length;j++) {
        res.push(nums[j])
        current += nums[j]
        if(current>sum-current) {
            break
        }
    }
    return res
};
//配列で最大値になる部分文字列を返す
//[10,9,8,4,3]なら10+9で残りの8+4+3より大きいので10,9を返す
//０から部分文字列を確認するのではなく、先に最大値を出して
//その最大値と現在値の合計値を引いて部分文字列を確認するのが圧倒的に効率良い