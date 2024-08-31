var numberOfPairs = function(nums1, nums2, k) {
    let res = 0
    for(let i=0;i<nums1.length;i++) {
        for(let j=0;j<nums2.length;j++) {
            if(nums1[i]%(nums2[j]*k)==0) {
                res++
            }
        }
    }
    return res
};
//nums1[i]がnums2[j]*kで割れるペア数かえす