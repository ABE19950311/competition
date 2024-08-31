var findTarget = function(root, k) {
    if(!root) return false
    let set = new Set()
    let stack = [root]
    while(stack.length) {
        const node = stack.pop()
        if(set.has(k-node.val)) return true
        set.add(node.val)
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }
    return false
};
//kの値を満たすvalが存在するか
//valをsetオブジェクトに格納
//k-valの値が存在したら、その値でkになることを示せるためtrueを返す