var intersect = function(nums1, nums2) {
    const map = new Map()
    const result = []

    for(let i=0;i<nums1.length;i++) {
        if(map.has(nums1[i])) {
            map.set(nums1[i],map.get(nums1[i])+1)
        } else {
            map.set(nums1[i],1)
        }
    }

    for(let j=0;j<nums2.length;j++) {
        if(map.get(nums2[j])>0) {
            result.push(nums2[j])
            map.set(nums2[j],map.get(nums2[j])-1)
        }
    }

    return result
};
//マップオブジェクトつくる
//nums1回して、でた値のkey,valueを保存する
//１回でたら１を、複数回でたら既存のvalueを＋１していく
//nums2で値重複確認する
//keyがあるかつvalueが１以上ならpushする,pushした後valueを−１
//-1する理由はnums1[2,1,3] nums2[1,1]のようにnums1では１回しかでてないけどnums2では２回出てるパターンの帳尻合わせのため
