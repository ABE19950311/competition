var differenceOfSum = function(nums) {
    // let sum = 0
    // let digitSum = 0
    // let digit = nums.join("").split("")
    // for(let i=0;i<nums.length;i++) {
    //     sum += nums[i]
    // }
    // for(let j=0;j<digit.length;j++) {
    //     digitSum += Number(digit[j])
    // }
    // return Math.abs(sum-digitSum)
    let sum = 0
    let digitSum = 0
    for(let i=0;i<nums.length;i++) {
        let tmp = nums[i]
        sum += tmp
        while(tmp>0) {
            digitSum += tmp%10
            tmp = Math.floor(tmp/10)
        }
    }
    return Math.abs(sum-digitSum)
};
//要素の合計値と各要素を分割した合計値の絶対値を返す
//要素の合計値は普通に、各要素の分割は10で割ったあまりを足して、１０で割って０になるまで続ければできる
//例47
//47%10→7 一桁めの7足す
//Math.floor(47/10)→4
//4%10→4 二桁めの4足す
//各要素の分割値を足せた