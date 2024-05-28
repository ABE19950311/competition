var countPairs = function(nums, k) {
    let count = 0
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i]==nums[j]&&(i*j)%k==0) {
                count++
            }
        }
    }
    return count
};
//nums[i]==nums[j]かつi*jがkで割り切れるペアの合計を返す