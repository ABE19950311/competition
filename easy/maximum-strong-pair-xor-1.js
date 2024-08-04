var maximumStrongPairXor = function(nums) {
    let res = 0
    for(let i=0;i<nums.length;i++) {
        for(let j=0;j<nums.length;j++) {
            if(Math.abs(nums[i]-nums[j])<=Math.min(nums[i],nums[j])) {
                let xor = nums[i]^nums[j]
                res = Math.max(res,xor)
            }
        }
    }
    return res
};
//|x - y| <= min(x, y)を満たすペアの中で最も高いxor値返す
//ペアは数重複おk
//特にひねりなく問題の条件満たすように書けばおk