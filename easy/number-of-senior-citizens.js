var countSeniors = function(details) {
    let res = 0
    // details = details.map((data)=>{
    //     return data.slice(11,13)
    // })
    // details.forEach((data)=>{
    //     if(data>60) {
    //         res++
    //     }
    // })
    details.forEach((data)=>{
        let age = Number(data.slice(11,13))
        if(age>60) {
            res++
        }
    })
    return res
};
//文字列の中で１2〜１3文字目に年齢情報がある
//"7868190130M7522"
//年齢が６０より大きいデータの数を返す
//年齢だけ見れば良いから12,13文字目だけ取り出して60超えてたらカウントする