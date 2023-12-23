var wordPattern = function(pattern, s) {
    const map = new Map()
    const str = s.split(/\s+/)
    if(pattern.length!=str.length) return false
    if(new Set(pattern).size!=new Set(str).size) return false

    for(let i=0;i<pattern.length;i++) {
        if(map.has(pattern[i])&&map.get(pattern[i])!=str[i]) {
            return false
        } else {
            map.set(pattern[i],str[i])
        }
    }
    return true
};
//mapオブジェクト(オブジェクトでも可)にこの値はこの値に対応しているというkey,valueを追加することがポイント
//引数sは空白(\s)区切りで分割して配列にする
//文字列全体とnew Setで重複を除いた場合で長さ比較して、一致してなかったら対応していないためfalse
//mapオブジェクトにkeyが存在してるか確認して、存在してたら現在見てるkey,valueが登録してるkey,valueと一致するか確認
//一致してなかったら異なる組み合わせが混在しているためfalse
