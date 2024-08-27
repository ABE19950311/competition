var squareIsWhite = function(c) {
    // let char = c[0]
    // let num = Number(c[1])
    // if(char=="a"||char=="c"||char=="e"||char=="g") {
    //     if(num%2==0) {
    //         return true
    //     } else {
    //         return false
    //     }
    // } else {
    //     if(num%2==0) {
    //         return false
    //     } else {
    //         return true
    //     }
    // }
    return c.charCodeAt(0)%2 != c.charCodeAt(1)%2
};
//指定位置のチェス版が白ならtrueちがったらfalse
//範囲はa~h,1~8
//charCodeの余りみて一致するしないで判別したらよい