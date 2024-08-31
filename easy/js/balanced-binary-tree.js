var isBalanced = function(root) {
    if(!root) return true
    if(depth(root)==-1) return false
    return true
};

function depth(root) {
    if(!root) return 0
    let left = depth(root.left)
    let right = depth(root.right)
    if(left==-1||right==-1) return -1
    if(Math.abs(left-right)>1) return -1
    return 1+Math.max(left,right)
}
//再起関数作成にleft,rightを入れて全探索
//left,rightのdepth差が1を超えたらfalse
