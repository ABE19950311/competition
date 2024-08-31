var numberOfPairs = function(nums) {
    // let pairs = 0
    // let i=0
    // let found = false
    // while(i<nums.length) {
    //     console.log(i)
    //     for(let j=i+1;j<nums.length;j++) {
    //         if(nums[i]==nums[j]) {
    //             pairs++
    //             nums.splice(i,1)
    //             nums.splice(j-1,1)
    //             console.log(nums)
    //             i=0
    //             found = true
    //             break
    //         }
    //     }
    //     console.log(found)
    //     if(!found) {
    //         i++
    //     }
    //     found = false
    // }
    // return [pairs,nums.length]
    let obj = {}
    let pairs = 0
    for(let i=0;i<nums.length;i++) {
        if(obj[nums[i]]) {
            pairs++
            delete obj[nums[i]]
        } else {
            obj[nums[i]] = 1
        }
    }
    return [pairs,Object.keys(obj).length]
};
//同じペア要素あったらカウントと削除する
//ペア数と最終的に残った要素数返す
//既存の配列に対して処理加えるより新規にobjつくって要素処理したほうがよい
