var bitwiseComplement = function(n) {
    let res = 0
    let index = 1
    let two = n.toString(2)
    two = two.toString().split("")
    two = two.map((num)=>{
        if(Number(num)==0) {
            return 1
        } else {
            return 0
        }
    })
    for(let i=two.length-1;i>=0;i--) {
        if(two[i]==1) res += index
        index *= 2
    }
    return res
};
//引数を２進数に
//その２進数の補数を１０進数にもどして返す