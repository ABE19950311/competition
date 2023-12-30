var firstUniqChar = function(s) {
    let count = 0
    const map = new Map()
    for(let i=0;i<s.length;i++) {
        map.has(s[i]) ? map.set(s[i],map.get(s[i])+1):map.set(s[i],1)
    }

    for(let j=0;j<s.length;j++) {
        if(map.get(s[j])==1) {
            return j
        }
    }
    return -1
};
//重複していない値の最初の位置を見つける
//mapオブジェクトに全値の出現値を保存する
//一回も重複してない値のvalueは１になる
//forで先頭から引数文字回す
//mapでkey参照して、valueが１の文字のループイテレータ返す
