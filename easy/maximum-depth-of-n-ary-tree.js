var maxDepth = function(root) {
    if(!root) return 0
    let max = 0
    for(let child of root.children) {
        max = Math.max(max,maxDepth(child))
    }
    return max+1
};
//root.childernのchildそれぞれに対して再起かける
//呼び出し先の再起はfor文呼んでない
//呼び出し結果をmaxに入れて,２回目以降は以前の呼び出し結果と今回の呼び出し結果比べて大きい方を際代入
