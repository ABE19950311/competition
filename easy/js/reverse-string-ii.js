var reverseStr = function(s, k) {
    const array = s.split("")
    for(let i=0;i<array.length;i+=2*k) {
        let start = i
        let end = i+k-1
        if(end==null) {
            continue;
        }
        while(start<end) {
            [array[start],array[end]] = [array[end],array[start]]
            start++
            end--
        }
    }
    return array.join("")
};
//2*k文字ごとにk-1の範囲で文字を反転する
//k=3なら6文字あくたびに、３文字の範囲反転する
//abcdefghjklならabcとghj反転する
//2*k文字ごとだからループイテレータの増加分もそうする
//k-1の範囲文字反転処理をするため
//start,endでiからk-1の斑点範囲を定める
//endが範囲外なら処理スキップ
//分割代入で反転する。反転したらstart,endの値加算減算して、反転範囲更新する
