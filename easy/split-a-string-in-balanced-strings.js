var balancedStringSplit = function(s) {
    let res = 0
    let l = 0
    let r = 0
    for(let i=0;i<s.length;i++) {
        if(s[i]=="R") {
            r++
        } else {
            l++
        }
        if(l>0&&r>0&&l==r) {
            res++
            l = 0
            r = 0
        }
    }
    return res
}
//文字列でRとLの数一致したら返り値＋１カウントする
//一致したら初期化して再確認
