var canConstruct = function(ransomNote, magazine) {
    let flag = true
    const map = new Map()
    for(let i=0;i<ransomNote.length;i++) {
        map.has(ransomNote[i]) ? map.set(ransomNote[i],map.get(ransomNote[i])+1):map.set(ransomNote[i],1)
    }
    for(let j=0;j<magazine.length;j++) {
        if(map.has(magazine[j])) {
            map.set(magazine[j],map.get(magazine[j])-1)
        }
    }
    map.forEach((value)=>{
        if(value>0) {
            flag = false
        }
    })
    return flag
};
//ransomNoteをmagazineの値使って作れるか確認する
//ransomNoteをぜんぶmapオブジェクトにkey,value作って入れる.重複は+1する
//magazine回してkey存在してたらvalue-1する
//全valueが0以下になってたらransomNote構成できる
//value１位上が残ってたらなんらかの値が構成できない状態のためfalse返す
//forEach内はreturn falseで返せないため、フラグ変数作って代入する