var findDisappearedNumbers = function(nums) {
    let res = []
    let array = new Array(nums.length+1).fill(0)
    array[0] = 1
    for(let i=0;i<nums.length;i++) {
        array[nums[i]] = 1
    }
    for(let j=0;j<array.length;j++) {
        if(array[j]==0) {
            res.push(j)
        }
    }
    return res
};
//nの長さの文字列の中でかけてるやつを探す
//配列は[4,3,2,7,8,2,3,1]のように１から始まるため、要素０番目は初期値入れておく
//配列は要素０から数えていって、今回要素０番目は実質カウントされないため、nums.length+1で末尾まで取るように対応する
//文字でたら１代入していって、最終的に０のままだったやつの要素位置pushして返せばいい
