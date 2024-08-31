var buddyStrings = function(s, goal) {
    if(s.length!=goal.length) return false
    let diff = []
    for(let i=0;i<s.length;i++) {
        if(s[i] != goal[i]) diff.push(i)
    }
    if(diff.length>2) return false
    if(!diff.length) return s.length != Array.from(new Set(s)).length
    const [a,b] = diff
    return s[a]==goal[b]&&s[b]==goal[a]
};
//sから２文字入れ替えてgoalになるか
//文字差分をとる、差分あったらindexいれる。差分数２こえたら入れ替え対象こえるめfalse
//差分ない場合はもとの文字から重複をとって長さ異なったらtrue
//なぜか
//s ab goal ab
//入れ替えたらbaで不一致false
//s aa goal aa
//重複してるため入れ替えてもaa goalとの差分もない前提のためtrue
//重複してるならsetで消える。文字数ももとと変わる
//分割代入にindexいれる
//入れ替えて一致したらtrue