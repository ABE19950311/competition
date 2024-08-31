var findWords = function(words) {
    return words.filter((w)=>{
        if(
            !/^[qwertyuiop]*$/i.test(w)&&
            !/^[asdfghjkl]*$/i.test(w)&&
            !/^[zxcvbnm]*$/i.test(w)
        ) {
            return false
        } else {
            return true
        }
    })
};
//文字列が下記いずれかの単語のみで構成されてるか確認する
//qwertyuiop,asdfghjkl,zxcvbnm
//チェックは正規表現とtestメソッドでやるとシンプルにできる
//if文でどの単語にも一致しない結果がtrueならfalseを返して文字列を除く
//!/^[qwertyuiop]*$/i.test(w)
//先頭がq~pいずれかに該当する。左のパターンが0回以上末尾まで続く。小文字大文字両方含む。
//パターン一致したらtrueを返して不一致ならfalseを返す
//if文で&&で繋げて確認する＋条件式trueならreturn falseするため、不一致でfalse返ったら!でboolean反転する
