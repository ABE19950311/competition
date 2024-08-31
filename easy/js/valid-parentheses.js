var isValid = function(s) {
    const stack = []
    for(let i=0;i<s.length;i++) {
        switch(s[i]) {
            case "(":
                stack.push(")")
                break;
            case "[":
                stack.push("]")
                break;
            case "{":
                stack.push("}")
                break;
            default:
                if(s[i]!==stack[stack.length-1]) return false;
                stack.pop()
        }
    }
    return stack.length==0
};
//起点シンボルがきたら対応シンボルをスタックに入れる
//対応シンボルがきたらスタック末尾の値と一致しているか確認。
//問題なければ取り出す、不一致ならfalseを返す
//最終的にスタックから全部取り出せたら全シンボル一致しているためtrueを返す
