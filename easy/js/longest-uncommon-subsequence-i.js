var findLUSlength = function(a, b) {
    if(a==b) return -1
    return Math.max(a.length,b.length);
};
//文字が異なる数が多い方の文字列の長さ返す
//文字列が長い方が、一致しない文字も多くなるため、文字列長い方を返せば良い
