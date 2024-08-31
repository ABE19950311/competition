var targetIndices = function(nums, target) {
    // let res = []
    // nums.sort((a,b)=>a-b)
    // for(let i=0;i<nums.length;i++) {
    //     if(nums[i]==target) {
    //         res.push(i)
    //     }
    // }
    // return res
    nums.sort((a,b)=>a-b)
    let res = binarySearch([],nums,target,0,nums.length-1)
    return res.sort((a,b)=>a-b)
};

function binarySearch(arr,nums,target,low,high) {
    if(low>high) return arr
    let mid = Math.floor((low+high)/2)
    if(nums[mid]==target) {
        arr.push(mid)
    }
    let right = binarySearch(arr,nums,target,mid+1,high)
    let left = binarySearch(arr,nums,target,low,mid-1)
    return Array.from(new Set(right.concat(left)))
}
//numsの中でtargetがあるindex位置昇順配列にして返す
//ざっくり線形探索パターンと２分探索パターン