var lastStoneWeight = function(stones) {
    while(stones.length>1) {
        stones.sort((a,b)=>b-a)
        let first = stones[0]
        let second = stones[1]
        if(first==second) {
            stones.splice(0,2)
        } else if(first!=second) {
            stones[1] = first-second
            stones.splice(0,1)
        }
    }
    return stones.length ? stones:0
};
//配列で最も重いやつと２番目に重いやつもってくる（ここの重いは値が大きいといういみ）
//重さ比べて同じだったら両方破壊する
//違ったらでかいやつと２番目にでかいやつひいて入れ直す。でかいやつは破壊する
//破壊はspliceめそっどなりなんなり