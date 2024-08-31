var longestCommonPrefix = function(strs) {
    strs.sort()
    for(let i=0;i<strs[0].length;i++) {
        if(strs[0][i]!=strs[strs.length-1][i]) {
            return strs[0].substr(0,i)
        }
    }
    return strs[0]
};

//引数の文字列配列をソート
//一番長い文字数分ループ
//["hogeee","hoeeee","hiueo"]
//str[0][0](h) == strs[strs.length-1][0](h) ok
//str[0][1](o) != strs[strs.length-1][1](i) 不一致
//strs[0].substr(1)で"hogeee"からhを取ってくる
