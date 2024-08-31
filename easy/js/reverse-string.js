var reverseString = function(s) {
    let length = s.length
    for(let i=0;i<Math.floor(length/2);i++) {
        [s[i],s[length-1-i]] = [s[length-1-i],s[i]]
    }
};
//例["h","e","l","l","o"]
//先頭と末尾,配列２番めと末尾から２番目..で入れ替えればOK
//配列長さ真ん中まで行けば一通り入れ替え終わるため、ループ条件もそれでよい
//入れ替え方は分割代入を使う
//[先頭、末尾]=[末尾、先頭]...