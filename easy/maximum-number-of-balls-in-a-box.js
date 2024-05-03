var countBalls = function(lowLimit, highLimit) {
    let obj = {}
    let ball = 0
    let max = 0
    for(let i=lowLimit;i<=highLimit;i++) {
        let arr = String(i).split("")
        arr.forEach((data)=>{
            ball += Number(data)
        })
        obj[ball] = obj[ball]?obj[ball]+1:1
        ball = 0
    }
    Object.values(obj).forEach((data)=>{
        max = Math.max(max,data)
    })
    return max
};
//各数字の合計値の箱にball入れる、同じ箱に入った最も多いballの数返す
//1→１の箱 123→１＋２＋３＝６の箱　に入る
//２桁以上は一旦配列にばらして合計値だす
//ballの数はいつものオブジェクトかmapオブジェクトのkeyvalueで数える