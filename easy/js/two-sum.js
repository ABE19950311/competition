var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i]+nums[j]==target) {
                return [i,j]
            }
        }
    }
};
//二重ループ使用 i,j
//i,jの位置が同じの場合はNGのためjの位置は常にi+1
//[1,4,5]
//1loop
//1+4
//1+5
//2loop
//4+5