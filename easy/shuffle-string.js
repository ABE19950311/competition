var restoreString = function(s, indices) {
    let res = new Array(s.length).fill(0)
    for(let i=0;i<s.length;i++) {
        res[indices[i]] = s.charAt(i)
    }
    return res.join("")
};
//sの文字列をindicesの値の位置にシャッフルして返す
//s分の配列作ってそこにいれていけばいい