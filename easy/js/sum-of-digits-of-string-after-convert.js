var getLucky = function(s, k) {
    let res = ""

    for(let i=0;i<s.length;i++) {
        res += s[i].charCodeAt()-96
    }

    for(let j=0;j<k;j++) {
        let tmp = 0
        res.split("").forEach((data)=>tmp+=Number(data))
        res = String(tmp)
    }
    return res
};
//"zbax"→262124
//charCodeAtで値とって対象数値に修正する
//値を連結する
//kの値分連結した値を分解して足す処理をループする
