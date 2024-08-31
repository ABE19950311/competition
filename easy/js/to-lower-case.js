var toLowerCase = function(s) {
    let res = ""
    for(let i=0;i<s.length;i++) {
        let code = s.charAt(i).charCodeAt()
        res += code > 64 && code < 91 ? String.fromCharCode(code+32):s.charAt(i)
    }
    return res
};
//charCodeAtで文字コード取得する
//65~90の範囲だったら大文字英字の範囲のため,String.fromCharCodeで小文字英字範囲の文字コードにする
