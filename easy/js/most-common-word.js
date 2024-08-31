var mostCommonWord = function(p, banned) {
    let dupWord = {}
    let maxIndex = -Infinity
    let para = p
    let res = ""
    banned.sort().reverse()
    if(banned.length) {
        for(let i=0;i<banned.length;i++) {
            para = para.replace(new RegExp(banned[i],"gi"),"").replace(/[,\.!?;']/g," ")
        }
    } else {
        para = para.replace(/[,\.!?;']/g," ")
    }
    para = para.split(" ")
    for(let i=0;i<para.length;i++) {
        let tmp = para[i].toLowerCase()
        dupWord[tmp] = dupWord[tmp] ? dupWord[tmp]+1:1
    }
    for(let word in dupWord) {
        if(word=="") continue
        if(maxIndex<dupWord[word]) {
            maxIndex = dupWord[word]
            res = word
        }
    }
    return res
};
//配列から禁止文字列省いて最もでてくる文字列返す
//禁止文字列をreplaceでまず消す。複数禁止ある場合はループで一個ずつ消してる.禁止文字短いのから消すと消せないものがでてくる
//例　banned[abc,abcd] 文字 abc,abcd → 文字 d になる
//だらら降順でそーとしとく
//,.!?;等の非アルファベット邪魔なので正規表現およびreplaceで消す
//でてくる単語数えたいから配列にする
//小文字にしてオブジェクトでいつものように単語数える
