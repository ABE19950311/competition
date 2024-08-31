var findGCD = function(nums) {
    nums.sort((a,b)=>a-b)
    let min = nums[0]
    let max = nums[nums.length-1]
    return gcd(min,max)
};

function gcd(a,b) {
    if(b==0) return a
    return gcd(b,a%b)
}
//配列要素最大、最小値の最大公約数を返す
//最大公約数はユークリッドの誤除法を再帰でやる