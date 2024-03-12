var binaryGap = function(n) {
    let count = 0
    let start = -Infinity
    let end = -Infinity
    let twoBinary = n.toString(2)
    for(let i=0;i<twoBinary.length;i++) {
        if(twoBinary.charAt(i)==1) {
            if(start==-Infinity) {
                start = count
                count = 0
            } else {
                end = Math.max(end,count)
                count = 0
            }
        }
        count++
    }
    return end-start == -Infinity ? 0:end-start
};
//２進数で１と１の間の距離で最も長いやつ返す
//toString(2)で２真数にする
//ループでbitみていってcount回して1のstartとend位置都度代入してく
//長いやつ判断はMath.max使えばおk