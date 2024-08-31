var isPerfectSquare = function(num) {
    return num ** 0.5 == Math.floor(num ** 0.5)
};
//** 0.5で平方根を出せる
//4 ** 0.5 = 2
//4 **　4 = 4の４畳で256
//平方根の整数切り捨てて同一にならtrue