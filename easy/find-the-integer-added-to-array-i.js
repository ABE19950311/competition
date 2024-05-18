var addedInteger = function(nums1, nums2) {
    nums1.sort((a,b)=>b-a)
    nums2.sort((a,b)=>b-a)
    return nums2[0]-nums1[0]
};
//num1の各要素に何足せばnums2の要素になるかだす
//どっちもソートして一個差分出して返せばおk、前要素同じ差になるため