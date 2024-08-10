var countSymmetricIntegers = function(low, high) {
    let res = 0
    for(let i=low;i<=high;i++) {
        const arr = i.toString().split("")
        if(arr.length%2==0) {
            let firstSum = 0
            let secondSum = 0
            const half_length = arr.length/2

            arr.slice(0,half_length).forEach((data)=>firstSum+=Number(data))
            arr.slice(half_length).forEach((data)=>secondSum+=Number(data))

            if(firstSum==secondSum) {
                res++
            }
        }
    }
    return res
};
//low,highの範囲で左右対象数の数を返す
//左右対象数の例
//1212→1+2と1+2で一致する
//1234 1+2,3+4で一致しない
//真ん中基準で配列分割してそれぞれの和みる

