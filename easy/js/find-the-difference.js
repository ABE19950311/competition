var findTheDifference = function(s, t) {
    for(let i=0;i<s.length;i++) {
        t = t.replace(s[i],"")
    }
    return t
};
//s=[a,b,c,d]
//t=[a,b,c,d,e]
//だったら、tからsの文字を消す
//文字列tからreplaceでsの文字を空白に置き換えれば重複してないやつを残せる
