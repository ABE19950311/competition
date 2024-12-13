var shuffle = function(nums, n) {
    let res = []

    for(let i=0;i<nums.length-n;i++) {
        res.push(nums[i])
        res.push(nums[i+n])
    }

    return res
};
//[x1,x2,...,xn,y1,y2,...,yn].
//Return the array in the form [x1,y1,x2,y2,...,xn,yn].にする
//iいれるときにnさきのようそもいれればいい