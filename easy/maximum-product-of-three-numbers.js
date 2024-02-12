var maximumProduct = function(nums) {
    nums.sort((a,b)=>b-a)
    return Math.max(nums[0]*nums[1]*nums[2],nums[0]*nums[nums.length-1]*nums[nums.length-2])
};
//配列の中で３つの数字かけた最大の積を求める
//[8,7,6,-1,-2,-3]
//特に負の値なければ降順にソートしたから先頭３つかけた値
//大きい負の（-100)が入ってても一番大きい値＊一番大きい負＊二番目に大きい負でもとめる。負は負＊負できえる