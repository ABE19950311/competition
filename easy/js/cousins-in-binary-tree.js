var isCousins = function(root, x, y) {
    let xval = []
    let yval = []

    function helper(node,x,y,depth,parent) {
        if(!node) return 0
        if(node.val==x) {
            xval = [depth,parent]
        } else if(node.val==y) {
            yval = [depth,parent]
        }
        if(node.left) helper(node.left,x,y,depth+1,node.val)
        if(node.right) helper(node.right,x,y,depth+1,node.val)
    }

    helper(root,x,y,0,root.val)
    return xval[0]==yval[0]&&xval[1]!=yval[1]
};
//x,yの位置が対になってたらtrue
//対の条件は深さが同じかつ親が異なる
//depthは普通に+1しつつ回す、親要素は次の関数呼び出す際に渡しておけばOKå