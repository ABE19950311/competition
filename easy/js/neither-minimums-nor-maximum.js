var findNonMinOrMax = function(nums) {
    if(nums.length<=2) return -1
    return Array.from(new Set(nums)).sort((a,b)=>a-b)[1]
};
//最大でも最小でもない数どれか返す
//要素数２以下は対象存在しないからif確認する
//new Setは[1,1,2,3]みたいなパターンくると違うの返すから重複削除しておく
