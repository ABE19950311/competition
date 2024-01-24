var reverseWords = function(s) {
    let arr = s.split(" ")
    for(let i=0;i<arr.length;i++) {
        arr[i] = arr[i].split("").reverse().join("")
    }
    return arr.join(" ")
};
//文字列配列にして値ごとにまた配列および一文字単位でバラしてreverseで反転して文字列に戻したものを代入する
//最後空白区切りで文字列に戻す