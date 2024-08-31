var shortestToChar = function(s, c) {
    let index = []
    let res = []
    for(let i=0;i<s.length;i++) {
        if(s.charAt(i)==c) {
            index.push(Number(i))
        }
    }
    for(let j=0;j<s.length;j++) {
        let tmp = Infinity
        for(let k=0;k<index.length;k++) {
            tmp = Math.min(Math.abs(j-index[k]),tmp)
        }
        res.push(Number(tmp))
    }
    return res
};
//文字列sから文字cがどのindexにあってその位置の絶対値が何か返す
//とりあえず文字cがどの位置にあるか調べる
//調べたら文字cとの距離を現在値からみていく
//Math.absで絶対値だして、Math.minで最も小さい値だす
//位置わかったら返り値配列にpush