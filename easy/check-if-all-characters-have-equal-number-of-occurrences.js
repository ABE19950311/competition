var areOccurrencesEqual = function(s) {
    let obj = {}
    s.split("").forEach((data)=>{
        obj[data] = obj[data]?obj[data]+1:1
    })
    let values = Object.values(obj)
    let value = values[0]
    for(let i=1;i<values.length;i++) {
        if(values[i]!=value) {
            return false
        }
    }
    return true
};
//文字列の全文字が同じ回数でてたらtrue
//objかmap objでかぞえる