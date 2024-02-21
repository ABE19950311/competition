var findShortestSubArray = function(nums) {
    let counts = {}
    let first = {}
    let last = {}
    let max = 0
    let res = Infinity
    for(let i=0;i<nums.length;i++) {
        counts[nums[i]] = (counts[nums[i]]||0)+1
        if(!first.hasOwnProperty(nums[i])) {
            first[nums[i]] = i
        }
        max = Math.max(max,counts[nums[i]])
        last[nums[i]] = i
    }
    for(let count in counts) {
        if(counts[count]==max) {
            res = Math.min(res,(last[count]-first[count])+1)
        }
    }

    return res
};
//配列の中で最もでてくる値のfirstIndexからlastIndexの長さを求める
//登場回数最も多い値が複数ある場合は、その中で最も短い長さを返す
//オブジェクトにいつもので数の登場回数記録する
//firstIndexなかったら入れる、lastは都度更新する
//最も多い登場回数は登場回数記録するタイミングで更新あればする
//for inはオブジェクト、連想配列等に使う