var canAliceWin = function(nums) {
    // let oneDigit = []
    // let twoDigit = []
    // let oneDigitSum = 0
    // let twoDigitSum = 0
    // for(let i=0;i<nums.length;i++) {
    //     if(Math.floor(nums[i]/10)!=0||nums[i]==10) {
    //         twoDigit.push(nums[i])
    //     } else {
    //         oneDigit.push(nums[i])
    //     }
    // }
    // if(!twoDigit.length) {
    //     twoDigit.push(0)
    // }
    // oneDigit.forEach((data)=>{
    //     oneDigitSum += data
    // })
    // twoDigit.forEach((data)=>{
    //     twoDigitSum += data
    // })

    // return oneDigitSum>twoDigitSum||twoDigitSum>oneDigitSum
    
    let oneDigitSum = 0
    let twoDigitSum = 0

    for(let i=0;i<nums.length;i++) {
        if(nums[i]<=9) {
            oneDigitSum += nums[i]
        } else {
            twoDigitSum += nums[i]
        }
    }
    return oneDigitSum>twoDigitSum||twoDigitSum>oneDigitSum
};
//値一桁か二桁の合計どちらかが大きかったらtrue
//一桁か二桁の判定した時点でたしていけばよい