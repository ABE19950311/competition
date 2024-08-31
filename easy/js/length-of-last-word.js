var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length
};
//文字列を空白区切りで分割して配列にする
//配列からpopで末尾を取ってlengthすればLastWordの長さがわかる
//trimは先頭、末尾の空白消すことで末尾に単語じゃなく空白が入ってるパターンに対処するため
