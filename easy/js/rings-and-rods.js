var countPoints = function(rings) {
    let obj = {}
    let count = 0

    for(let a=1;a<rings.length;a+=2) {
        obj[rings[a]] = ""
    }

    for(let i=1;i<rings.length;i+=2) {
        if(obj[rings[i]].indexOf(rings[i-1])==-1) {
            obj[rings[i]] = obj[rings[i]]+rings[i-1]
        }
    }

    Object.entries(obj).forEach(([key,value])=>{
        if(value.length==3) {
            count++
        }
    })

    return count
};
//"B0B6G0R6R0R6G9"でなんばんめに何の輪っかはいってるか判別
//RGB３色はいってるやつの数かえす
//obj初期化した後にindexOfで色入ってるか確認してなかったら追加してる
//objの中にsetObjつくればindexOf不要になってなかったらnew Setするようにしたら初期化処理もふようかも
//countはobjectentriesではいれつわたすから分割代入できる