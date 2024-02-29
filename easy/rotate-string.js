var rotateString = function(s, goal) {
    // let arr = s.split("")
    // for(let i=0;i<s.length;i++) {
    //     for(let j=1;j<s.length;j++) {
    //         let tmp = arr[j-1]
    //         arr[j-1] = arr[j]
    //         arr[j] = tmp
    //     }
    //     if(arr.join("")==goal) return true
    // }
    // return false
    if(s.length!=goal.length) return false
    return s.concat(s).includes(goal)
};
//sをシフトしたらいつかgoalになるか
//s abcde goal cdeab
//bcdea
//cdeab でシフトするとgoalになるためtrue
//文字列sを連結した後にgoalの文字列含むか確認したらシフトしなくても判定できる
//abcdeabcde でgola cdeab確かにある