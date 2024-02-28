var minDiffInBST = function(root) {
    let min = Infinity
    let prev = Infinity

    function helper(node) {
        if(!node) return
        helper(node.left)
        if(prev!=Infinity&&node.val-prev<min) {
            min = node.val-prev
        }
        prev = node.val
        helper(node.right)
    }

    helper(root)
    return min
};
//隣接するnode間の値で最小を返す
//prevに隣接先のnode入れて現在のnodeと引く
//その値がminに入ってる値未満ならmin更新する
//左から先にみる