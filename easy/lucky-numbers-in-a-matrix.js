var luckyNumbers  = function(m) {
    // let res = []
    // let min = Infinity
    // let index = 0
    // for(let i=0;i<m.length;i++) {
    //     for(let j=0;j<m[i].length;j++) {
    //         if(m[i][j]<min) {
    //             min = m[i][j]
    //             index = j
    //         }
    //     }
    //     for(let k=0;k<m.length;k++) {
    //         console.log(m[i][index])
    //             if(m[k][index]>min) {
    //                 min = Infinity
    //                 index = 0
    //                 break
    //             }
    //         }
    //         if(min!=Infinity) {
    //             res.push(min)
    //             min = Infinity
    //             index  = 0
    //         }
    // }
    // return res
    let res = []
    for(let i=0;i<m.length;i++) {
        let min = Math.min(...m[i])
        let index = m[i].indexOf(min)

        if(m.every(data => data[index]<=min)) {
            res.push(min)
        }
    }
    return res
};
//二次元配列
//行の中で最小かつ列の中で最大の値を返す
//行の最小はspread構文で配列展開したのにMath.minしたら簡単にだせる
//各配列にindexOfで最小値のindexだす
//everyメソッドで各配列のindex位置の値がmin以下を全要素が満たしたらtrue返す
//true返ったらpushする