var intersection = function(nums1, nums2) {
    let result = []
    let map = new Map()
    let s1 = Array.from(new Set(nums1))
    let s2 = Array.from(new Set(nums2))
    for(let i=0;i<s1.length;i++) {
        map.set(s1[i],0)
    }
    for(let j=0;j<s2.length;j++) {
        map.has(s2[j]) ? map.set(s2[j],map.get(s2[j])+1):map.set(s2[j],0)
    }
    map.forEach((value,key)=>{
        if(value!=0) {
            result.push(key)
        }
    })
    return result
};
//二つの配列から一致する値を重複除いて出力するため、Setオブジェクトで最初から重複省く
//Array.fromで配列に戻しとく
//keyが既にあったら+1してなかったらkey:0をmapオブジェクトに新規追加する
//最後にmapをforEachで回して、value０以外のも物は複数出てるためkeyを帰り値よう配列にpushする
