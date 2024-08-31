var postorder = function(root,res=[]) {
    if(!root) return []
    for(let child of root.children) {
        postorder(child,res)
    }
    res.push(root.val)
    return res
};
//preorderと基本同じ
//root.val入れるタイミングを再起関数一通り呼び出した後に変えただけ
