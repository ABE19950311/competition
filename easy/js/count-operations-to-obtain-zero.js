var countOperations = function(num1, num2) {
    return rec(num1,num2,0)
};

function rec(num1,num2,count) {
    if(num1==0||num2==0) return count
    if(num1>=num2) {
        return rec(num1-num2,num2,count+1)
    } else {
        return rec(num1,num2-num1,count+1)
    }
}
//num1>=num2 num1-num2 それ以外 num2-num1
//どっちが０になるまで続ける
//count返す
//るーぷでもさいきでも