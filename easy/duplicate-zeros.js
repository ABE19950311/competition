var duplicateZeros = function(arr) {
    // let stack = []
    // let pointer = 0
    // while(stack.length<arr.length) {
    //     if(arr[pointer]==0) {
    //         stack.push(0)
    //         stack.push(0)
    //     } else {
    //         stack.push(arr[pointer])
    //     }
    //     pointer++
    // }
    // for(let j=0;j<arr.length;j++) {
    //     arr[j] = stack[j]
    // }
    for(let i=0;i<arr.length;i++) {
        if(arr[i]==0) {
            arr.splice(i,0,0)
            arr.pop()
            i++
        }
    }
};
//配列に０あったら隣に０を１こ追加する
//元配列分の長さこえたら末尾から要素けす
