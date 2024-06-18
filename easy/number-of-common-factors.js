var commonFactors = function(a, b) {
    let count = 1
    let maxDiv = div(a,b)
    for(let i=2;i<=maxDiv;i++) {
        if(a%i==0&&b%i==0) {
            count++
        }
    }
    return count
};

function div(a,b) {
    if(a==b) return a
    if(a>b) {
        return div(a-b,b)
    } else {
        return div(a,b-a)
    }
}
//a,b両方割れる数の個数を返す
//ユークリッドの互除法で最大公約数だして、その範囲で調べる