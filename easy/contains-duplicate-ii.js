var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for(let i=0;i<nums.length;i++) {
        if(i-map.get(nums[i])<=k) {
            return true
        }
        map.set(nums[i],i)
    }
    return false
}
//Mapオブジェクトを利用する
//つくったMapオブジェクトにkey:参照してる値 value:位置で保存
//現在値とMapオブジェクトからkeyでとった位置の差分をみる
//オブジェクトとの違い
//keyにString型以外を指定できる
//オブジェクトはString
//sizeで要素数簡単にとれる

