var findIntersectionValues = function(nums1, nums2) {
    let ans1 = 0
    let ans2 = 0
    let length = 0

    if(nums1.length>=nums2.length) {
        length = nums1.length
    } else {
        length = nums2.length
    }

    for(let i=0;i<length;i++) {
        if(nums2.includes(nums1[i])) ans1++
        if(nums1.includes(nums2[i])) ans2++
    }

    return [ans1,ans2]
};
//nums2 ni fukumu nums1 no i to nums1 ni fukumu nums2 no i no youso suu wo kaesu