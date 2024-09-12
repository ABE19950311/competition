var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0

    for(let i=0;i<arr1.length;i++) {
        let flag = true
        for(let j=0;j<arr2.length;j++) {
            let val = Math.abs(arr1[i]-arr2[j])
            if(val<=d) {
                flag = false
                break
            }
        }
        if(flag) {
            count++
        }
    }
    return count
};
//|arr1[i]-arr2[j]| <= dを満たさない全数返す
//条件アウトならbreakでループぬける