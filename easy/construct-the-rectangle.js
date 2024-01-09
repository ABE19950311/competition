var constructRectangle = function(area) {
    let sqrt = Math.floor(Math.sqrt(area))
    while(!Number.isInteger(area/sqrt)) {
        sqrt--
    }
    return [area/sqrt,sqrt]
};
//平方根を求める、小数点は切り捨てる
//平方根で割れるまで-する
//平方根で割った時の値と、割った数を返す