var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i+=2) {
        if(nums[i]!=nums[i+1]) {
            return nums[i]
        }
    }
    return false
};
//配列を昇順でソート
//現在値と一個次の値見て一致してなかったらsingle-numberのためreturn
//一個次の値まで確認してるため、ループするときは+=2する