var findTilt = function(root) {
    let val = 0

    function dfs(node) {
        if(!node) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)
        val += Math.abs(left-right)
        return node.val+left+right
    }

    dfs(root)
    return val
};
//左右それぞれのnodeの合計だす
//合計の差分の絶対値を出してreturn