var countGoodSubstrings = function(s) {
    // let list = []
    // let count = 0
    // for(let i=2;i<s.length;i++) {
    //     list.push(`${s[i-2]},${s[i-1]},${s[i]}`)
    // }
    // for(let j=0;j<list.length;j++) {
    //     let length = new Set(list[j].split(",")).size
    //     if(length==3) count+=1
    // }
    // return count
    let count = 0
    for(let i=0;i<s.length-2;i++) {
        let list = s.slice(i,i+3)
        if(new Set(list).size==3) {
            count+=1
        }
    }
    return count
};
//３つ区切りで文字列のグループをつくる
//"xyzzaz"なら
//xyz,yzz,zza,zaz
//作った各グループ文字に重複がないやつの個数を返す
//グループはsliceメソッドでつくって、setオブジェクトで配列消した後のsizeが3なら消えてないから+1
