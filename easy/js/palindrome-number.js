var isPalindrome = function(x) {
    const array = String(x).split('')

    while(array.length>1) {
        if(array.shift()!==array.pop()) {
            return false;
        }
    }
    return true;
};
//引数を文字列にする
//''で分割して配列にする
//shift()で先頭、popで末尾を取り出して比較する
//配列要素１つになるまで続けて全値一致していればtrueを返す