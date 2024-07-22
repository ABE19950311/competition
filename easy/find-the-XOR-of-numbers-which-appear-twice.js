var duplicateNumbersXOR = function(nums) {
    let obj = {}
    let arr = []
    for(let i=0;i<nums.length;i++) {
        obj[nums[i]] = obj[nums[i]]?obj[nums[i]]+1:1
    }
    Object.entries(obj).forEach((val)=>{
        if(val[1]==2) {
            arr.push(Number(val[0]))
        }
    })
    if(!arr.length) return 0

    let res = arr[0]

    for(let j=1;j<arr.length;j++) {
        res = res^arr[j]
    }
    return res
};
//２回でてる全ての数のXOR返す