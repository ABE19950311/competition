var minimumAverage = function(nums) {
    let res = []
    nums.sort((a,b)=>b-a)
    while(nums.length) {
        let avg = Math.round((nums.shift()+nums.pop())/2*10)/10
        res.push(avg)
    }
    res.sort((a,b)=>b-a)
    return res.pop()
};
//引数nums配列から最大最小とって平均を別途配列にpush
//小数点は第一位までとる
//numsなくなるまでループ
//最も小さい平均を返す