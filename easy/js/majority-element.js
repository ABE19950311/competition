var majorityElement = function(nums) {
    let obj = {}
    for(let i=0;i<nums.length;i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]]+1:1
        if(obj[nums[i]]>nums.length/2) return nums[i]
    }
};
//値がobjのkeyに存在していたら、そのkeyのvalueを＋１
//keyが何回登場したか計算できる
//keyがなかったら初期値1を入れる
//値が何回登場したかvalueを見てn/2回以上出てる値をreturn
