var minimumSum = function(num) {
    let a = num.toString().split("").sort()
    return parseInt(a[0]+a[2])+parseInt(a[1]+a[3])
};
//引数２つに分割したときの最昭和かえす
//2932
//2239
//22+39=61✖︎
//23+29=52丸 02 13