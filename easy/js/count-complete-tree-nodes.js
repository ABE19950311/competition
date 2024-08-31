var countNodes = function(root) {
    let length = 1;
    if(!root) return 0

    if(root.left) {
        if(!root.left) return length
        length += countNodes(root.left)
    }
    if(root.right) {
        if(!root.right) return length
        length += countNodes(root.right)
    }

    return length
};
//DFS探索
//rootのnode換算+node数加算用にlength宣言
//leftツリーあったら再帰でたどりつつleenghtを加算する
//加算はlength=1が加算されていく
//同様にrightもたどる
//たどるnodeなくなったらlenghtreturn
//左サブツリーたどり終わったら,左サブツリーたどり終わる前のcountNodes呼び出しから右側をたどれる
