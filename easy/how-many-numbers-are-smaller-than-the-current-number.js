var smallerNumbersThanCurrent = function(nums) {
    // let res = []
    // let count = 0
    // for(let i=0;i<nums.length;i++) {
    //     for(let j=0;j<nums.length;j++) {
    //         if(nums[i]>nums[j]) {
    //             count++
    //         }
    //     }
    //     res.push(count)
    //     count = 0
    // }
    // return res
    let sort = [...nums].sort((a,b)=>a-b)
    return nums.map((data)=>sort.indexOf(data))
};
//対象要素より小さい数何個あるかかえす
//二重ループで調べていくか
//昇順にソートした配列用意して、要素位置調べてかえす
//昇順にソートすれば各数字で何個小さい数あるかわかる