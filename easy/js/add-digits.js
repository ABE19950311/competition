var addDigits = function(num) {
    let sum = num
    let proc = 0
    while(sum>=10) {
    for(let i=0;i<String(sum).length;i++) {
        proc += Number(String(sum).charAt(i))
    }

    sum = proc
    proc = 0
    }
    return sum
};
//sumに初期値を入れて10以上なら分割して計算できるためループする
//変数procにはsumの値更新する用の計算結果一時保存用、sumに代入したら初期化する
//計算は値を文字にしたらfor文からcharAtで撮ってこれる
//38.charAt[0]=3 [1]=8
//とってきた文字はNumberで数値に変えてから計算する
