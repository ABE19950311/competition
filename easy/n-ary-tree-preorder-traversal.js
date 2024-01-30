var preorder = function(root,res=[]) {
    if(!root) return []
    res.push(root.val)
    for(let child of root.children) {
        preorder(child,res)
    }
    return res
};
//各childrenにchildくっついてる分再起で回す
//root1 child[3,5,6]
//root3 child[5,6]
//child 5
//child 6