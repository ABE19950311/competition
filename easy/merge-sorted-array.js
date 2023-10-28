var merge = function(nums1, m, nums2, n) {
    for(let i=m,j=0;j<n;i++,j++) {
        nums1[i] = nums2[j]
    }
    nums1.sort((a,b)=>a-b)
};
//１ループで２つの変数を使う
//nums1の配列末尾に、nums2の先頭値から入れていく
//入れ終わったら昇順でソートする