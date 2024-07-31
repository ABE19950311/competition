var removeTrailingZeros = function(num) {
    // let arr = num.split("")
    // for(let i=arr.length-1;i>=0;i--) {
    //     if(arr[i]=="0") {
    //         arr.pop()
    //     } else {
    //         break
    //     }
    // }
    // return arr.join("")
    return num.replace(/0+$/g,"")
};
//末尾の０全部取り除いて返す
//０が１回以上連続して末尾にあったら空白に置換したらいい