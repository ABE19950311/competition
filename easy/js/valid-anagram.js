var isAnagram = function(s, t) {
    if(s.length!=t.length) return false
    let array = new Array(26).fill(0)

    for(let i=0;i<s.length;i++) {
        array[s.charCodeAt(i) - "a".charCodeAt(0)] = array[s.charCodeAt(i) - "a".charCodeAt(0)]+1
        array[t.charCodeAt(i) - "a".charCodeAt(0)] = array[t.charCodeAt(i) - "a".charCodeAt(0)]-1
    }

    for(let j=0;j<array.length;j++) {
        if(array[j]!=0) {
            return false
        }
    }

    return true
};
//文字列の長さが異なればアナグラムにならないため冒頭でif
//アルファベット ２６文字の出現頻度を調べるため、２６文字分の配列宣言して、初期値にfillで０を入れる
//charCodeAtで出現した文字ーaのcharCodeAtすることで、aから何文字離れてるか（何のアルファベットか）わかる
//引数sは加算,tは減算することで、アナグラムになっていれば、＋ー０、つまり配列全て０の値になる
//配列に０以外があったら、何らかの文字が一致してないためfalse

//アルファベットの出現頻度、アルファベット位置等は
//文字そのままではなく、文字コードに変えて扱うのが一般的
