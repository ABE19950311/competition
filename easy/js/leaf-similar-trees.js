var leafSimilar = function(root1, root2) {
    // let stack1 = []
    // let stack2 = []    

    // function helper1(node) {
    //     if(!node.left&&!node.right) {
    //         stack1.push(node.val)
    //         return 0
    //     }
    //     if(node.left) helper1(node.left)
    //     if(node.right) helper1(node.right)
    // }

    // function helper2(node) {
    //     if(!node.left&&!node.right) {
    //         stack2.push(node.val)
    //         return 0
    //     }
    //     if(node.left) helper2(node.left)
    //     if(node.right) helper2(node.right)
    // }

    // helper1(root1)
    // helper2(root2)

    // while(stack1.length) {
    //     if(stack1[stack1.length-1]==stack2[stack2.length-1]) {
    //         stack1.pop()
    //         stack2.pop()
    //     } else {
    //         return false
    //     }
    // }
    // return !stack1.length&&!stack2.length
    let stack1 = []
    let stack2 = []

    function helper(node,stack) {
        if(!node.left&&!node.right) stack.push(node.val)
        if(node.left) helper(node.left,stack)
        if(node.right) helper(node.right,stack)
    }

    helper(root1,stack1)
    helper(root2,stack2)

    while(stack1.length) {
        if(stack1[stack1.length-1]==stack2[stack2.length-1]) {
            stack1.pop()
            stack2.pop()
        } else {
            return false
        }
    }
    return !stack1.length&&!stack2.length
};
//２つの木の葉の要素が同一の値かつ並びならtrue
//stack2つよういする
//再帰で末尾までみにいって末尾きたらstackに要素push
//再帰に各stack渡せば関数１個ですむ
//stackの値一致してたら消していく不一致ならfalse
//stack両方空になってたらtrue