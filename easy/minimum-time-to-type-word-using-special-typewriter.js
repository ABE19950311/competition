var minTimeToType = function(word) {
    // let mid = 13
    // let max = 25
    // let count = 0
    // let prev = "a"
    // for(let i=0;i<word.length;i++) {
    //     if(Math.abs((prev.charCodeAt()-96)-(word[i].charCodeAt()-96))>mid) {
    //         let move = Math.abs(max-Math.abs((prev.charCodeAt()-96)-(word[i].charCodeAt()-96)))
    //         count += move+1
    //         prev = word[i]
    //     } else {
    //         let move = Math.abs((prev.charCodeAt()-96)-(word[i].charCodeAt()-96))
    //         count += move+1
    //         prev = word[i]
    //     }
    // }
    // return count

    let mid = 13
    let max = 26
    let count = 0
    let prev = "a"
    for(let i=0;i<word.length;i++) {
        let diff = Math.abs(prev.charCodeAt()-word[i].charCodeAt())
        if(diff>mid) {
            count += max-diff+1
        } else {
            count += diff+1
        }
        prev = word[i]
    }
    return count
};
//文字から文字への移動の合計カウントを返す
//時計回りとハンド系周りができる
//距離が中央値超えたらハンド計から回ったほうがやい.最大値から引けば距離だせる
//そうでない場合は普通に時計回りで移動する
//+1はタイプ時に必要なカウント
//文字の距離計算はcharCode使えばOK
//同じ計算が複数でてくるか説明変数diffを用意した
//変数prevの更新はifの条件に関わらず必ずやるからifの後においた