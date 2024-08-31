var toHex = function(num) {
    if(num==0) return "0"
    let res = ""
    let bit = 0
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    if(num<0) {
        num += Math.pow(2,32)
    }
    while(num>0) {
        bit = num%16
        res = arr[bit]+res
        num = Math.floor(num/16)
    }
    return res
};
//１０真数を１６真数にする
//numが負の値なら３２ビットの符号なし整数に変換する。３２ビットなのは慣習のいみあいもある
//num１６で割ったあまりの値をだす。16真数一覧は配列にしておく、１５なら配列からfをとる
//返り値resにくわえていく
//numを16で割って値更新していく