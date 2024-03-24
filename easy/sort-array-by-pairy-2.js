var sortArrayByParityII = function(nums) {
    let pointer = 0
    for(let i=0;i<nums.length;i++) {
        if(i%2==0&&nums[i]%2!=0) {
            let tmp = nums[i]
            for(let j=i+1;j<nums.length;j++) {
                if(nums[j]%2==0) {
                    pointer = j
                    break
                }
            }
            nums[i] = nums[pointer]
            nums[pointer] = tmp
        } else if(i%2!=0&&nums[i]%2==0) {
            let tmp = nums[i]
            for(let j=i+1;j<nums.length;j++) {
                if(nums[j]%2!=0) {
                    pointer = j
                    break
                }
            }
            nums[i] = nums[pointer]
            nums[pointer] = tmp
        }
    }
    return nums
};
//偶数奇数の順に並び替える
//ポインター使ってソート位置を探す
//２つのポインター使ったらより効率的にできる
//let evenPointer = 0; // 偶数番目のポインター
// let oddPointer = 1;  // 奇数番目のポインター
    
// while (evenPointer < nums.length && oddPointer < nums.length) {
//     // 偶数番目の位置に奇数がある場合、奇数番目の位置に偶数を見つけるまでループ
//     while (evenPointer < nums.length && nums[evenPointer] % 2 === 0) {
//         evenPointer += 2;
//     }
//     // 奇数番目の位置に偶数がある場合、偶数番目の位置に奇数を見つけるまでループ
//     while (oddPointer < nums.length && nums[oddPointer] % 2 !== 0) {
//         oddPointer += 2;
//     }
    
//     // 偶数番目と奇数番目の位置にそれぞれ偶数と奇数が見つかった場合、交換する
//     if (evenPointer < nums.length && oddPointer < nums.length) {
//         [nums[evenPointer], nums[oddPointer]] = [nums[oddPointer], nums[evenPointer]];
//     }
// }

// return nums;