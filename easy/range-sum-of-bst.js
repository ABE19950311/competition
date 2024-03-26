var rangeSumBST = function(root, low, high) {
    let arr = []
    let sum = 0

    function helper(node) {
        if(!node) return 0
        if(node.left) helper(node.left)
        if(node.val>=low&&node.val<=high) arr.push(node.val)
        if(node.right) helper(node.right)
    }

    helper(root)
    arr.forEach((data)=>{
        sum += data
    })
    return sum
};
//low,high範囲内の木のnodeの合計値返す
//再帰で回って値さがす.合計出す