var isPrefixString = function(s, words) {
    let str = ""
    for(let i=0;i<words.length;i++) {
        str += words[i]
        if(str==s) return true
    }
    return false
};
//文字列sがwordsの前置文字列ならtrue返す
//s="iloveleetcode", words = ["i","love","leetcode","apples"]
//前から見ていってiloveleeetcodeできるからtrue
//s = "iloveleetcode", words = ["apples","i","love","leetcode"]
//applesiloveになるからfalse
//順にwordsみて連結して行ってsと一致したらtrue返して、ループ抜けたらできてないからfalse返す
