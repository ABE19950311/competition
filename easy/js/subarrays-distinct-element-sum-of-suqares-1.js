var sumCounts = function(nums) {
    let res = 0
    let set = new Set()
    for(let i=0;i<nums.length;i++) {
        for(let j=i;j<nums.length;j++) {
            let tmp = i
            while(tmp<=j) {
                set.add(nums[tmp])
                tmp++
            }
            res += set.size ** 2
            set.clear()
        }
    }
    return res
};
//[1,2,1] 並びあった全要素パターンかつユニーク要素の累乗足して返す
//[1][2][1][1,2][2,1][1,2,1]
//並びあっただから離れてる[1,1]はNG
//ユニーク判断はsetで重複はじけばよい
//隣り合った要素パターンは二重ループで総当たりしつつ、whileで離れた分回して要素回収する
