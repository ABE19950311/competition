var inorderTraversal = function(root) {
    const stack = []
    const result = []
    while(root||stack.length) {
        if(root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            result.push(root.val)
            root = root.right
        }
    }
    return result
};
//不可さ優先探索通りがけ順　参照https://zenn.dev/kueharx/articles/6e0362c9c28a65#dfs
//左頂点から順番に巡回して、巡回先無くなったら要素を取り出していく
//データ操作はstack使用