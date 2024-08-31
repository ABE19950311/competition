var hasAlternatingBits = function(n) {
    let two = n.toString(2);
    for(let i=1;i<two.length;i++) {
        if(two.charAt(i)==two.charAt(i-1)) {
            return false
        }
    }
    return true
};
//２真数にする
//同じbit隣り合ってたらfalse