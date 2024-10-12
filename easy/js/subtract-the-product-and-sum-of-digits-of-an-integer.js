var subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0
    let arr = String(n).split("")

    for(let i=0;i<arr.length;i++) {
        let num = Number(arr[i])
        product *= num
        sum += num
    }

    return product-sum
};
//引数nの各桁の積と和の差をかえす