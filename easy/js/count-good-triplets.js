var countGoodTriplets = function(arr, a, b, c) {
    let res = 0
    for(let i=0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++) {
            for(let k=j+1;k<arr.length;k++) {
                if(Math.abs(arr[i]-arr[j])>a) {
                    continue
                }
                if(Math.abs(arr[j]-arr[k])>b) {
                    continue
                }
                if(Math.abs(arr[i]-arr[k])<=c) {
                    res++
                }
            }
        }
    }
    return res
};
//|arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
//を満たす場合countする
//i,j,kの要素みるため３じゅうループする
//a,bを超える場合はcontinueで弾いて、最後に<=cになった場合条件満たすためcount