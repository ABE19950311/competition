var preorderTraversal = function(root) {
    if(!root) return []
    let result = []
    let stack = [root]
    while(stack.length) {
        let node = stack.pop()
        result.push(node.val)
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }
    return result
};
//初期宣言配列にrootいれておく
//popした値をresultに入れて、rightかleftがあったらstackにいれる
//最終的にstackの値がなくなったら終了
//right,leftは存在していたらpushするからnullは弾かれる