var isSubsequence = function(s, t) {
    let i=0
    let j=0
    while(j<t.length) {
        if(s[i]==t[j]) {
            i++
        }
        j++
    }
    return i==s.length
};
//sがtの要素で構成していたらok
//ただ、tの要素順で一致している必要がある
//sとtが一致していたらsの要素位置を増加する
//順番が不一致だったら最終的にsの要素位置とsの文字長さは一致しなくなる
//二重ループでやると、sの位置変わるタイミングで再度tの要素全部みるため順番一致不一致を確認できなくなるためwhileが良い
