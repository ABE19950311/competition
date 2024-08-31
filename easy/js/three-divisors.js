var isThree = function(n) {
    // let arr = new Array(n+1).fill(false)
    // let count = 0
    // arr[0] = true
    // arr[1] = true
    // for(let i=2;i<arr.length;i++) {
    //     if(arr[i]==false&&n%i==0) {
    //         arr[i] = true
    //         for(let j=i*i;j<arr.length;j*=i) {
    //             arr[j] = true
    //         }
    //     }
    // }
    // arr.forEach((data)=>{
    //     if(data==true) {
    //         count+=1
    //     }
    // })
    // console.log(count,arr)
    // return count-1==3
    let count = 1
    for(let i=2;i<=n;i++) {
        if(count<=3) {
            if(n%i==0) {
                count+=1
            }
        } else {
            break
        }
    }
    return count==3
};
//約数がちょうど３つならtrue
//素数判定みたいに割れるやつと割れないやつtrue,falseで分けるか
//約数３つになるまで総当たりする