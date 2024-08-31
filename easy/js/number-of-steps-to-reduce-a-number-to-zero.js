var numberOfSteps = function(num) {
    let res = 0
    while(num!=0) {
        if(num%2==0) {
            num /= 2
            res += 1
        } else {
            num -= 1
            res += 1
        }
    }
    return res
};
//0になるまで減らす
//偶数なら２で割るそれ以外は−１する