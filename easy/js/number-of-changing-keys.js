var countKeyChanges = function(s) {
    let count = 0
    s = s.toLowerCase()
    for(let i=1;i<s.length;i++) {
        if(s[i-1]!=s[i]) count++
    }
    return count
};
//直前の文字と違う（キーを変更した）全回数を返す
//大文字小文字の差は全部小文字か大文字にしてしまえばよい
//後は今と一個前見て違ったらcount++すればよい