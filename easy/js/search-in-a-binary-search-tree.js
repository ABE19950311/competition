var searchBST = function(root, val) {
    let stack = [root]

    while(stack.length) {
        let node = stack.pop()
        if(node.val==val) return node
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }

    return null
};
//valと一致するnodeの部分木あったら返す
//popでnode取り出した段階はleft,rightポインタにnodeくっついてる状態だからそのまま返せば良い
