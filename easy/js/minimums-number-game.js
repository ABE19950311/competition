var numberGame = function(nums) {
    let arr = []
    nums.sort((a,b)=>a-b)
    while(nums.length) {
        const alice = nums.shift()
        const bob = nums.shift()
        arr.push(bob)
        arr.push(alice)
    }
    return arr
};
//aliceが配列から最小要素とる
//bobがalice以外の最小とる
//配列arrにいれる
//とった要素は配列からけす
//配列からになるまでつづけてarr返す