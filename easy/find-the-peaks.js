var findPeaks = function(m) {
    let res = []
    for(let i=1;i<m.length-1;i++) {
        if(m[i-1]<m[i]&&m[i+1]<m[i]) {
            res.push(i)
        }
    }
    return res
};
//両隣より大きい要素のindex一覧を返す
//両隣だから０とlength-1は対象外