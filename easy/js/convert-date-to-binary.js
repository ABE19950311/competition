var convertDateToBinary = function(date) {
    return date.split("-").map((data)=>Number(data).toString(2)).join("-")
};
//"2080-02-29"等でくるひきすうdateをそれぞれ2進数にかえてかえす　せんとうの０ははずす
//-ではいれつにぶんかつしてmapでそれぞれようそに２進数変換処理してはいれつさいせいせいして-くぎりjoinで文字列にもどす
