var sumOfUnique = function(nums) {
    // let res = 0
    // for(let i=0;i<nums.length;i++) {
    //     let count = 0
    //     for(let j=0;j<nums.length;j++) {
    //         if(i==j) continue
    //         if(nums[i]==nums[j]) {
    //             count++
    //         }
    //     }
    //     if(count==0) {
    //         res+=nums[i]
    //     }
    // }
    // return res
    let obj = {}
    let res = 0
    for(let i=0;i<nums.length;i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]]+1:1
    }
    Object.entries(obj).forEach((data)=>{
        if(data[1]==1) {
            res+=Number(data[0])
        }
    })
    return res
};
//ユニークな要素の合計を返す
//二重ループでカウントして判断するか、いつものobj,mapobjで各要素の出現カウントして判断する方法がある
