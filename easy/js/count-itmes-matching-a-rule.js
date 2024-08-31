var countMatches = function(items, ruleKey, ruleValue) {
    let res = 0
    let value = 0
    const rule = ["type","color","name"]

    // if(ruleKey=="type") {
    //     value = 0
    // } else if(ruleKey=="color") {
    //     value = 1
    // } else {
    //     value = 2
    // }

    value = rule.indexOf(ruleKey)

    for(let i=0;i<items.length;i++) {
        if(items[i][value]==ruleValue) {
            res++
        }
    }
    return res
};
//ruleKeyの値で要素見る位置変わる
//対象indexの要素がruleValueと一致してる配列の数を返す