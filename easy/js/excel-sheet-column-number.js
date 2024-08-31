var titleToNumber = function(s) {
    let result = 0
    for(let i=0;i<s.length;i++) {
        result += (s.charCodeAt(i)-64) * Math.pow(26,s.length-(i+1));
    }
    return result
};
//charCodeAtで指定文字の文字コードをとる
//A 65
//B 66
//-64したらエクセルシートの列になる
//Math.powで２６の累乗をとる
//２６は末尾を示す
//AB 1*26 + 2=28