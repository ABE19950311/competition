var countAsterisks = function(s) {
    let flag = true
    let count = 0
    for(let i=0;i<s.length;i++) {
        if(flag&&s[i]=="*") count++
        if(s[i]=="|") flag = !flag
    }
    return count
};
//||でペアになっている
//||のペアの外にある*の数の合計を返す
//*カウントできるflagがtrueかつ*きたらcount++する
//|がきてペアゾーン入ったらflagをfalseにしてcountしないようにする
//もっかい|きてペアゾーン終わったらflagもっかいtrueにしてcountできるようにする
