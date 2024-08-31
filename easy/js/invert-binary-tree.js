var invertTree = function(root) {
    let stack = [root]
    while(stack.length) {
        let node = stack.pop()
        if(node) {
            [node.left,node.right] = [node.right,node.left]
            stack.push(node.left,node.right)
        }
    }
    return root
};
//[node.left,node.right] = [node.right,node.left]
//分割代入（デストラクチャリング）
//node.leftの値をnode.rightにnode.rightの値をnode.leftとして代入できる
//node.leftまたはnode.rightをstackに入れて入れ替え代入処理をしていく
