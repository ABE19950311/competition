var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let maxCount = 0
    for(let i=0;i<nums.length;i++) {
        count = (nums[i]==0) ? 0:count+1
        maxCount = (count>maxCount) ? count:maxCount
    }
    return maxCount
};
//１が何回連続しているか
//現在連続値と、MAX値宣言
//0きたらcountリセットする、違ったら１＋
//maxはcountが多くなったら都度更新する