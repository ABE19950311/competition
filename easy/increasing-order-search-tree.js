var increasingBST = function(root) {
    let val = []

    function helper(node) {
        if(!node) return 0
        val.push(node.val)
        if(node.left) helper(node.left)
        if(node.right) helper(node.right)
    }

    helper(root)
    val.sort((a,b)=>a-b)

    let head = new TreeNode(val[0])
    let cur = head
    for(let i=1;i<val.length;i++) {
        let leaf = new TreeNode(val[i])
        cur.right = leaf
        cur = cur.right
    }
    return head
};
//木の要素全部右側に昇順で作り直す
//要素全部洗い出して昇順にする
//heap領域にnode分確保して先頭headつくる
//要素の数だけ領域確保して値val部分に入れたものをrightにポインタでつなげていく