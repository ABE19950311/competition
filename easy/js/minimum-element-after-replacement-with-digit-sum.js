var minElement = function(nums) {
    let res = Infinity
    nums.forEach((num)=>{
        let sum = 0
        num.toString().split("").forEach((n)=>{
            sum += parseInt(n)
        })
        res = Math.min(res,sum)
    })
    return res
};
//kaku youso keta bunkatu sita yatu no goukei de
//minimum wo kaesu
//foreach mawa site atai bunkatu site mata foreach de mawasite sum dasu
//atoha math.min de minimum de tasikamete ikeba ii