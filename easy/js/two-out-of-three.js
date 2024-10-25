var twoOutOfThree = function(nums1, nums2, nums3) {
    let res = []
    let arr = Array.from(new Set(nums1.concat(nums2).concat(nums3)))

    for(let i=0;i<arr.length;i++) {
        let count = 0
        if(nums1.includes(arr[i])) {
            count++
        }
        if(nums2.includes(arr[i])) {
            count++
        }
        if(nums3.includes(arr[i])) {
            count++
        }
        if(count>=2) {
            res.push(arr[i])
        }
    }
    return res
};
//3つの配列のうち少なくとも2つに存在するすべての値を含む配列を返す
//配列concatしてsetで重複けしたリストまわして存在チェックとかうんとしてじょうけんみたしたら配列にいれる
//値カウント用オブジェクト用意して3つはいれつsetで重複けしたあと２かいいじょうでてるあたい探すやりかたもある