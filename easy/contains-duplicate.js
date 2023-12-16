var containsDuplicate = function(nums) {
    let sort = nums.sort()
    for(let i=0;i<nums.length;i++) {
        if(sort[i]==sort[i+1]) {
            return true
        }
    }
    return false
};
//元配列ソートする
//重複値あれば隣り合わせになる
//ループで隣を確認して同じだったら重複があるのでtrueを返す
