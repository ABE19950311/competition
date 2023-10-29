var isSameTree = function(p, q) {
    if(!p && !q) return true
    if(!p||!q||p.val!=q.val) return false
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};
//再起関数で両ツリーのleft,rightの値を渡し続けて全一致するか確認する
//両ツリー無くなったら全一致true返す
//どちらかが先になくなるか、valの値が一致しないケースになったらfalse
