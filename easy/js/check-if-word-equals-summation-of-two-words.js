var isSumEqual = function(firstWord, secondWord, targetWord) {
    let firstSum = getCodeNumber(firstWord)
    let secondSum = getCodeNumber(secondWord)
    let target = getCodeNumber(targetWord)

    // for(let i=0;i<firstWord.length;i++) {
    //     firstSum += (firstWord[i].charCodeAt()-97).toString()
    // }

    // for(let j=0;j<secondWord.length;j++) {
    //     secondSum += (secondWord[j].charCodeAt()-97).toString()
    // }

    // for(let k=0;k<targetWord.length;k++) {
    //     target += (targetWord[k].charCodeAt()-97).toString()
    // }

    return firstSum+secondSum==target
};

function getCodeNumber(word) {
    let num = ""

    for(let i=0;i<word.length;i++) {
        num += (word[i].charCodeAt()-97).toString()
    }

    return parseInt(num,10)
}

//a->0,b->1,c->2 ...
//かく文字を上記パターンで変換してfirst+second==target nara true
//charCodeAtの結果をパターンあてはまるようにすればいい
//変換るーぷしょりは関数にしてまとめる