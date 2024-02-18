var calPoints = function(o) {
    let arr = [];
    let sum = 0;
    for(let i=0;i<o.length;i++) {
        if(o[i]!="+"&&o[i]!="D"&&o[i]!="C") {
            arr.push(Number(o[i]))
        } else if(o[i]=="C") {
            arr.pop()
        } else if(o[i]=="D") {
            arr.push(arr[arr.length-1]*2)
        } else if(o[i]=="+") {
            arr.push(arr[arr.length-1]+arr[arr.length-2])
        }
    }
    arr.forEach((data)=>{
        sum += data;
    })
    return sum
};
//仕様通りにつくる
//Cで直前データ消す、Dで直前データ＊２を追加する、＋で直前２つデータの合計を追加する
//最終的な合計値を返す