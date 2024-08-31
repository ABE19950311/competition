var sortArrayByParity = function(nums) {
    let i = 0
    let j = nums.length - 1;
    
    while(i<j) {
        while(i<j&&nums[i]%2==0)
            i++;
        while (i<j&&nums[j]%2==1)
            j--;
        [nums[i],nums[j]]=[nums[j],nums[i]];
    }
    
    return nums;
};
//偶数前に奇数後ろに
//偶数一と奇数位置探して入れ替えるを繰り返す