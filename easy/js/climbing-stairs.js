var climbStairs = function(n) {
    let one = 0;
    let two = 1;
    for(let i=0;i<n;i++) {
        [one,two] = [two,one+two]
    }
    return two
};
//フィボナッチ数列
//0,1,1,2,3,5,8,13...
//[0,1] one 0 two 1
//[1,1] one 1 two 1
//[1,2] one 1 two 2...
//[2,3]
//[3,5]
//[5,8]
//[8,13]