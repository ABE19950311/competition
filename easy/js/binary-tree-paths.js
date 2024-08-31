var binaryTreePaths = function(root) {
    let path = []

function dfs(root,cur) {
    if(!root) return
    if(!root.left && !root.right) {
        path.push(cur+root.val)
        return
    }
    dfs(root.left,cur+root.val+"->")
    dfs(root.right,cur+root.val+"->")
}
    dfs(root,"")
    return path
};
//DFS
//binaryTreePathsの中で返り値配列宣言
//上記関数の中で再起関数定義して呼び出し
//left,right渡りつつ、curとroot.valをくっつけていく
//left,rightそれぞれ渡り終えて、くっつけ他結果のcurはpathにpushする
