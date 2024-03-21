var hasGroupsSizeX = function(deck) {
    let obj = {}

    for(let i=0;i<deck.length;i++) {
        obj[deck[i]] = obj[deck[i]]?obj[deck[i]]+1:1
    }

    const data = Object.values(obj)
    let g = data[0]

    function gcd(x,y) {
        if(x==0) return y
        return gcd(y%x,x)
    }

    for(let j=1;j<data.length;j++) {
        g = gcd(g,data[j])
        if(g<2) return false
    }

    return g>=2
};
//各グループのカードを分割
//分割数は>1
//カードの回数出
//各カードの最大公約数出
//2未満は分割条件の>1を満たさないためfalse