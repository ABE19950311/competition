var separateDigits = function(nums) {
    // return nums.join("").split("").map((num)=>Number(num))
    return nums.join("").split("")
};
//[13,25,83,77]なら[1,3,2,5,8,3,7,7]になる。数値全部分割する
//一つの文字列にした後再度一要素ずつ分割すればよい