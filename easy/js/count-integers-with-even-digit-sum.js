var countEven = function(num) {
    let count = 0
    for(let i=1;i<=num;i++) {
        let tmp = i
        let sum = 0
        while(tmp) {
            sum += tmp%10
            tmp = Math.floor(tmp/10)
        }
        if(sum%2==0) {
            count++
        }
    }
    return count
};
//１からnumまでの数で各けたの合計が偶数のやつ返す
//forで各数みていって各桁の合計はwhileの中で%10で桁抽出して足すのと/10でけた更新するいつものやつで出す
