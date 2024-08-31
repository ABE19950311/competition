var mergeTrees = function(root1, root2) {
    if(!root1||!root2) return root1||root2
    let node = new TreeNode(root1.val+root2.val)

    node.left = mergeTrees(root1.left,root2.left)
    node.right = mergeTrees(root1.right,root2.right)
    return node
};
//新たに木およびnode作って二つの木のノードの合計値作る
//どっちかのnodeなくなるまで再帰、どっちかのnodeあったらreturnする
//node.left= node.right= で作ったnodeのメモリ領域及びポインタをつなげていく