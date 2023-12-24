var reverseVowels = function(s) {
    let reg = s.match(/[aeiou]/gi)
    const rev = s.replace(/[aeiou]/gi,()=>reg.pop())
    return rev
};
//反転対象文字を正規表現で全部とって変数regに入れる
//対象文字列が出るたび、変数regの値popして置換することで反転する
//replace第二引数はコールバックにしないと、置換対象文字１回出た時点で処理が終わる
//置換対象でるたび置換したいためコールバックにする