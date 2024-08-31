var isUnivalTree = function(root) {
    let unique = root.val
    return uniqueCheck(root,unique)
};

function uniqueCheck(node,unique) {
    if(!node) return true
    if(node.val!=unique) return false
    if(uniqueCheck(node.left,unique)==false) return false
    if(uniqueCheck(node.right,unique)==false) return false
    return true
}
//すべてのnodeの値が同じならtrue