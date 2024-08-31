var maxProfit = function(prices) {
    let left = 0
    let right = 1
    let max = 0
    while(left<prices.length) {
        if(prices[left]<prices[right]) {
            let diff = prices[right]-prices[left]
            max = Math.max(max,diff)
        } else {
            left = right
        }
        right++
    }
    return max
}
//現位置と一個次の位置と最大利益の変数を用意しておく
//一個次の値が現在位置の値より大きい場合利益がでるので差分を取る
//最大利益の値と差分のMath.maxをとって再代入する
//差分取れない場合は比較位置を更新する