var isSubtree = function(root, subRoot) {
    if(!root) return !subRoot
    return rec(root,subRoot) || isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
};

function rec(node1,node2) {
    if(!node1||!node2) return !node1&&!node2
    if(node1.val!=node2.val) return false
    return rec(node1.left,node2.left) && rec(node1.right,node2.right)
}
//mainとsubtreeが完全一致してるかチェック
//rootないときにsubtreeもなかったら一致してるためreturnでtrueとして返す
//再起でrootとsubtree渡す
//どっちかのnodeがなくなった際に両方なかったらtrueを返す。片方あったら一致してないためfalseを返す
//関数呼び出し終わった後のnode.valチェックで一致してなかったらfalse
//left,right両方試して両方最終的にtrueが帰ったらtrue
//false帰ったらroot.left,root.right入れて同様にチェックする
