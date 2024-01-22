var getMinimumDifference = function(root) {
    const array = toSortArray(root)
    let diff = Infinity
    for(let i=1;i<array.length;i++) {
        let abs = Math.abs(array[i-1]-array[i])
        if(abs<diff) {
            diff = abs
        }
    }
    return diff
};

function toSortArray(node,array=[]) {
    if(node) {
        toSortArray(node.left,array)
        array.push(node.val)
        toSortArray(node.right,array)
    }
    return array
}
//通りがけ順でnodeの昇順ソート配列作成
//nodeの差分絶対値とって、小さい値がでたら更新していく