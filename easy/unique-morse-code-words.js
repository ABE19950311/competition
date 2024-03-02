var uniqueMorseRepresentations = function(words) {
    let molues = []
    let word = {
        a:".-",
        b:"-...",
        c:"-.-.",
        d:"-..",
        e:".",
        f:"..-.",
        g:"--.",
        h:"....",
        i:"..",
        j:".---",
        k:"-.-",
        l:".-..",
        m:"--",
        n:"-.",
        o:"---",
        p:".--.",
        q:"--.-",
        r:".-.",
        s:"...",
        t:"-",
        u:"..-",
        v:"...-",
        w:".--",
        x:"-..-",
        y:"-.--",
        z:"--.."
    }
    for(let i=0;i<words.length;i++) {
        let tmp = ""
        for(let j=0;j<words[i].length;j++) {
            tmp += word[words[i].charAt(j)]
        }
        molues.push(tmp)
    }
    return new Set(molues).size
};
//各文字列のモールス信号で重複省いた数を返す
//各文字のモールス辞書つくる
//二重ループで配列内各文字列にアクセス
//モールス信号結合つくったの配列いれる
//Setオブジェクトで重複消す