var checkTree = function(root) {
    if(root.val==(root.left.val+root.right.val)) {
        return true
    } else {
        return false
    }
};
//rootの値が左右子nodeの合計と同じならtrue