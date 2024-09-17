var minimumCost = function(nums) {
    if(nums.length==3) {
        return nums[0]+nums[1]+nums[2]
    }

    let first_min = Infinity
    let second_min = Infinity
    
    for(let i=1;i<nums.length;i++) {
        if(nums[i]<first_min) {
            second_min = first_min
            first_min = nums[i]
        } else if(nums[i]<second_min) {
            second_min = nums[i]
        }
    }
    return nums[0]+first_min+second_min
};
//nums[0]と各要素3つ連続した部分配列つくってくなかで最小値をかえす
//一番小さい値と２番目に小さい値探してnums[0]にたせばよい