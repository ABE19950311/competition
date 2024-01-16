var findMode = function(root) {
    let currentVal = null
    let count = 0
    let maxCount = 0
    let res = []

    function rev(node) {
        if(!node) return
        rev(node.left);
        count = node.val==currentVal?count+1:1
        if(count==maxCount) {
            res.push(node.val)
        } else if(count>maxCount) {
            maxCount = count
            res = [node.val]
        }
        currentVal = node.val
        rev(node.right);
    }

    rev(root)

    return res
};
//いつもの再帰。出現値の最も高いnodeを返す
//関数の中で再起関数定義して呼び出すことで、再起の中で代入した値を共有できる（ブロック変数のため）
//先に左ノード全部やってから右ノードやる、左ノードからやることで小さいあたいから昇順で確認できる
