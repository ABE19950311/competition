var minimumOperations = function(nums) {
    return nums.filter((num)=>num%3!=0).length
};
//各要素を３で割れるようにするために必要な回数かえす
//３じゃない時点でカウントするから3の倍数全部はじいたあとの長さかえせばいい