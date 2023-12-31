var sumOfLeftLeaves = function(root,isLeft) {
    if(!root) return 0
    if(!root.left&&!root.right&&isLeft) return root.val
    return sumOfLeftLeaves(root.left,true) + sumOfLeftLeaves(root.right,false)
};
//各一番左のnodeのvalの合計値を返す
//再起関数でleftとrightnode回す
//node回り切った後、leftnodeが判別するためisLeft変数でflag作る
//最終的なleft.valの値がreturn sumOfLeftLeaves(root.left,true) + sumOfLeftLeaves(root.right,false)で返る
//return 9+15等
//    0
// 9   12
//   15  18
