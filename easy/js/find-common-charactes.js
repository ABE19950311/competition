var commonChars = function(words) {
    let res = []
    for(let i=0;i<words[0].length;i++) {
        res.push(words[0][i])
    }
    for(let j=1;j<words.length;j++) {
        res = res.filter((char)=>{
            let length = words[j].length
            words[j] = words[j].replace(char,"")
            return length > words[j].length
        })
    }
    return res
};
//配列要素全文字に含む文字
//一文字列目の文字群を抽出
//文字群に対してfilter
//条件は２文字列目以降に対してreplaceかけて
//元の長さ>replace(含んでいたら削除する、削除したらもとより短くなる)ならその文字を返して他は消す