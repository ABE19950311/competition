var validPalindrome = function(s) {
    let low = 0
    let high = s.length-1
    while(low<high) {
        if(s[low]!=s[high]) {
            return checkValid(s,low+1,high) || checkValid(s,low,high-1)
        }
        low++
        high--
    }
    return true;
};

function checkValid(s,low,high) {
    while(low<high) {
        if(s[low]!=s[high]) return false
        low++
        high--
    }
    return true
}
//探査用ポインタ　先頭,low 末尾,high作る
//２つのポインタ交わるまでループ
//途中一致しなかった場合、一文字削除（先頭から１文字削除と末尾から１文字削除）パターン探査用関数を呼ぶ
//そこでも一致しなかったらfalse