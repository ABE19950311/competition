var isSymmetric = function(root) {
    if(!root) return true
    let result = mirrorCheck(root.left,root.right)
    return result
};

function mirrorCheck(leftnode,rightnode) {
    if(!leftnode && !rightnode) return true
    if(!leftnode||!rightnode||leftnode.val!=rightnode.val) return false
    return mirrorCheck(leftnode.left,rightnode.right) && mirrorCheck(leftnode.right,rightnode.left)
}
//mirroCheck関数を別途作って、rootの左nodeと右nodeを引数で渡す
//後は左右対象比較を再起関数で実行する