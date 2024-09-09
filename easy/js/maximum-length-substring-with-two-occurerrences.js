var maximumLengthSubstring = function(s) {
    let left = 0
    let obj = {}
    let res = 0
    
    for(let i=0;i<s.length;i++) {
        obj[s[i]] = 0
    }

    for(let right=0;right<s.length;right++) {
        obj[s[right]] += 1
        while(obj[s[right]]>2) {
            obj[s[left]] -= 1
            left++
        }
        let cur = (right-left)+1
        res = Math.max(res,cur)
    }
    return res
};
//最初に登場文字初期化
//rightポインタ走らせて各文字のvalue加算する
//2を超えたら対象文字の回数２以下になるまで左端(left)移動していく
//現在のrightポインタ位置と２回以下にするまでleft移動した分引く＋１で何文字の部分文字列になったか出す
//スライディングウィンドウとのこと