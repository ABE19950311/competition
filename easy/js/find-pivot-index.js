var pivotIndex = function(nums) {
    let leftsum = 0
    let rightsum = 0

    nums.forEach((data)=>{
        leftsum += data
    })

    for(let i=0;i<nums.length;i++) {
        leftsum -= nums[i]
        if(leftsum==rightsum) return i
        rightsum += nums[i]
    }

    return -1
};
//配列の左辺と右辺の合計値が一致する境を返す　なかったらー１
//どうやって左辺と右辺出すか
//先に左辺として配列の合計値を代入する
//その左辺から右辺の値として引いていく
//左辺とした合計と右辺とした合計が一致したら現在の添字返す
//一致しなかったら右辺に現在値足して繰り返す
//先に合計値出して、そこから値引いて一致したら条件満たすものあるよね

