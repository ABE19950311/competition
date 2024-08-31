var arrayPairSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let sum = 0
    for(let i=0;i<nums.length;i+=2) {
        // sum += Math.min(nums[i],nums[i+1])
        sum += nums[i]
    }
    return sum
};
//[1,3,2,4]
//数字２つグループつくって、グループの最小値を足していく
//上記計算の最大値を求める
//配列ソートする
//ソートした状態でグループの最小値足していけば最も大きな結果でる
//Math.minしなくてもソートとした状態なら２つおきにみれば目的のグループの最小値取れる
