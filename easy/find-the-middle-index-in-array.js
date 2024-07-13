var findMiddleIndex = function(nums) {
    // let leftSum = 0
    // let rightSum = 0
    // let index = 0

    // nums.forEach((num)=>{
    //     rightSum += num
    // })

    // while(nums.length) {
    //     let tmp = nums.shift()
    //     index++
    //     leftSum += tmp
    //     if(leftSum==rightSum) return index-1
    //     rightSum -= tmp
    // }

    // return -1
    let leftSum = 0
    let rightSum = 0

    nums.forEach((num)=>{
        rightSum += num
    })

    for(let i=0;i<nums.length;i++) {
        leftSum += nums[i]
        if(leftSum==rightSum) return i
        rightSum -= nums[i]
    }

    return -1
};
//配列要素で左部分の和と右部分の和が一致するindexを返す
//先に合計値を出す
//合計値を基に一要素ずつ左右それぞれに足すなり引くなりして値一致するか確認する
//一致したらindex返す、ループしてもなかったら-1返す