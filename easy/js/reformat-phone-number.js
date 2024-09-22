var reformatNumber = function(number) {
    let str = number.replace(/-|\s/g,"")
    let length = str.length
    let res = ""

    for(let i=0;i<length;i+=3) {
        if(length-i==4) {
            res += str.slice(i,i+2)+"-"+str.slice(i+2,i+4)
            break
        } else if(length-i<=3) {
            res += str.slice(i)
            break
        } else {
            res += str.slice(i,i+3)+"-"
        }
    }
    return res
};
//でんわばんごうさいせいせいする
//"1-23-45 6"でダッシュと空白をまずけす
//３桁ごとにダッシュで区切る
//残り４桁なら２桁-２桁にする　残り３桁or2桁はそのまま区切っておわる
//length-iで残り何桁のこってるかしらべる i=3 length=7 nokori4