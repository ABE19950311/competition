var minDepth = function(root) {
    if(!root) return 0
    return depth(root,0)
};

function depth(root,dep) {
    if(!root) return dep
    if(!root.left) return depth(root.right,dep+1)
    if(!root.right) return depth(root.left,dep+1)
    return Math.min(depth(root.left,dep+1),depth(root.right,dep+1))
}
//再起関数にroot,left,rightいれて全探索
//left,right両方ある場合はmath.minで小さい方のdepを取得
//leftかrihgtがnullなら片方のみ探索していく