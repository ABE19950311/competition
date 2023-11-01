var hasPathSum = function(root, targetSum) {
    if(!root) return false
    if(root.val==targetSum&&!root.left&&!root.right) return true
    return hasPathSum(root.left,targetSum-root.val) || hasPathSum(root.right,targetSum-root.val)
};
//いつもの再帰でleft,rihgt入れて全探索
//targetSumからroot.valの値引いて、一致するケースがあった場合,かつleft,rightがない＝rootでない場合
//targetSumの値になるルートがあるとしてtrue返す
//再帰関数は||にする.&&にするとtrueが帰らなくなる
//hasPathSum(root.left,targetSum-root.val)→return true || hasPathSum(root.right,targetSum-root.val)→return false
//true帰る