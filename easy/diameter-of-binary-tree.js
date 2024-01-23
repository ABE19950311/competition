var diameterOfBinaryTree = function(root) {
let diameter = 0;

dfs(root);

return diameter;

function dfs(node) {
    if(!node) return 0;
    const left = dfs(node.left)
    const right = dfs(node.right)
    diameter = Math.max(diameter,left+right)
    return 1+Math.max(left,right)
}
};
//再起
//https://algo-logic.info/brute-force-dfs/