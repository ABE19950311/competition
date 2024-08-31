var decompressRLElist = function(nums) {
    let res = []
    for(let i=0;i<nums.length;i++) {
        if(i%2==0) {
            for(let j=0;j<nums[i];j++) {
                res.push(nums[i+1])
            }
        }
    }
    return res
};
//偶数番目の値分奇数の値を増やす