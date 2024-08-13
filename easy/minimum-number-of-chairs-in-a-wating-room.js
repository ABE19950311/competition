var minimumChairs = function(s) {
    let count = 0
    let res = 0
    for(let i=0;i<s.length;i++) {
        if(s.charAt(i)=="E") {
            count++
        } else {
            res = Math.max(res,count)
            count--
        }
    }
    return Math.max(res,count)
};
//Eが最大何回連続するかわかれば良い
//引く前にcount最大値だったら代入しておく