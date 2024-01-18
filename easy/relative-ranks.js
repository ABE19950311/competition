var findRelativeRanks = function(score) {
    let count = 0
    let array = []
    for(let i=0;i<score.length;i++) {
        for(let j=0;j<score.length;j++) {
            if(score[i]<score[j]) {
                count++
            }
        }
        array[i] = count
        count = 0
    }
    return array.map((data)=>{
        if(data==0) {
            return "Gold Medal"
        } else if(data==1) {
            return "Silver Medal"
        } else if(data==2) {
            return "Bronze Medal"
        } else {
            return String(data+1)
        }
    })
};
//二重ループで自分よりスコアの高いやついたらcount Plusして配列に入れる
//自分よりスコアの高いやつがいない（０）ならゴールド、１ならシルバーをmapで返り値配列作る