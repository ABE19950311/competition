var findContentChildren = function(g, s) {
    let res = 0
    let gs = g.sort((a,b)=>a-b)
    let ss = s.sort((a,b)=>a-b)
    let j = 0
    for(let i=0;i<ss.length;i++) {
        if(ss[i]>=gs[j]) {
            res++
            j++
        }
    }
    return res
};
//クッキーsの値がgの値より大きい数をかぞえる
//sortする際、sort()ではなく、明示的にg.sort((a,b)=>a-b)としないと
//[10,9,8,7]が来た場合[10,7,8,9]になる
//二重ループにすると、本来比較しない値もみにいくため、クッキー側だけループして値を比較して
//条件一致したときだけもう片方のループイテレータjも加算する
