var moveZeroes = function(nums) {
    let low = 0
    let high = low+1
    while(high<nums.length) {
        if(nums[low]!=0) {
            low++
            high++
        } else if(nums[high]!=0) {
            [nums[low],nums[high]] = [nums[high],nums[low]]
            low++
            high++
        } else {
            high++
        }
    }
    return nums
};
//遅いやつと先行のやつ２つ用意
//先行が配列の長さ超えたら終了
//遅いやつの位置が０位外なら入れ替え発生しないため両方動かす [1,0][1,2]どっちも動かない
//遅いやつの位置が０かつ早いやつの位置が０以外なら分割代入で位置を入れ替える 入れ替えた後はどっちも進める
//遅いやつの位置０だけど早いやつの位置も０なら入れ替え発生しないため、０位がくるまで早いやつの位置だけ進める
