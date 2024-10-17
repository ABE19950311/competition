var decrypt = function(code, k) {
    let res = new Array(code.length).fill(0)
    for(let i=0;i<code.length;i++) {
        let a = 1
        if(k>0) {
            while(a<=k) {
                let p
                p = i+a>=code.length ? Math.abs(i+a-code.length):i+a
                res[i] = res[i]+code[p]
                a++
            }
        } else if(k<0) {
            while(a<=Math.abs(k)) {
                let p
                p = i-a<0 ? Math.abs(i-a+code.length):Math.abs(i-a)
                res[i] = res[i]+code[p]
                a++
            }
        } else {
            res[i] = 0
        }
    }
    return res
};
// k > 0の場合、i番目の数字を次のk番目の数字の和に置き換える。
// k < 0の場合、1番目の数字を前のk個の数字の和に置き換える。
// k == 0の場合、1番目の数字を0に置き換える。
// codeは循環配列なので、code[n-1]の次の要素はcode[0]であり、code[0]の前の要素はcode[n-1]である。
//deeepl yori
//条件満たすように条件ループ駆使してむりやり
//そのままcode配列操作すると既存要素邪魔だったためcode.length長返り値よう配列さくせい
//コードかいぜんのよちあり