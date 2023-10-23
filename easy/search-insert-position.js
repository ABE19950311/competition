// let result = 0
    // for(let i=0;i<nums.length;i++) {
    //     if(nums[i]<target) {
    //         result += 1
    //     }
    // }
    // return result
    let low = 0
    let high = nums.length - 1
    while(low<=high) {
        let mid = Math.floor((high+low)/2)
        if(target==nums[mid]) return mid
        if(target>nums[mid]) {
            low = mid + 1
        } else {
            high = mid -1
        }
    }
    return low
//２分探索法
//中央値を算出
//targetと中央値が一致したらreturn
//targetが中央値より大きいなら,最小値を中央値+1に更新して再度中央値算出
