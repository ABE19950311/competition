var checkRecord = function(s) {
    // const obj = {
    //     A:0,
    //     L:0,
    //     P:0
    // }
    // let count = 0
    // let maxCount = 0
    // for(let i=0;i<s.length;i++) {
    //     if(s.charAt(i)=="L") {
    //         count++
    //         if(count>maxCount) {
    //             maxCount=count
    //         }
    //     } else {
    //         count=0
    //     }
    //     obj[s.charAt(i)] = obj[s.charAt(i)]+1
    // }
    // if(obj["A"]<2&&maxCount<3) {
    //     return true
    // }
    // return false
    return !/^.*(A.*A|L{3,}).*$/.test(s)
};
//回１
//集計用オブジェクトと、遅刻回数加算用変数用意
//遅刻してたら加算、連続する毎に加算。max超えたらmax更新
//出席状況加算
//欠席２未満かつ遅刻連続３未満ならtrue
//回２
//正規表現でおk
//先頭から任意の文字を０回以上繰り返した後、AA、ALA、ALLLA等Aが２回でるか、LLLでLが３連続出るパターンの後に任意の文字を０回以上繰り返して末尾にいく
//パターンに一致してなかったらtrueを返す