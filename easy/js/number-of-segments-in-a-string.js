var countSegments = function(s) {
    return s.split(" ").filter((data)=>{return data!=""}).length
};
//文字分割した際の配列の長さを求める
//"Hello, my name is John" nara 5
//splitで空白区切りで配列にする
//配列に""が入ると１文字としてカウントされるため
//filterメソッドで空白を除外する