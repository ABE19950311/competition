var romanToInt = function(s) {
    const symbols = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let result = 0;
    for(let i=0;i<s.length;i++) {
        if(symbols[s[i]] < symbols[s[i+1]]) {
            result -= symbols[s[i]]
        } else {
            result += symbols[s[i]]
        }
    }
    return result;
};

//シンボルと対応する値のオブジェクトを宣言
//現在と一個先のシンボルの値を見て、現在の値が低かったら,resultから引く
//CM→900 -100+1000で計算を合わせる