var minLength = function(s) {
    while(s.match(/AB/g)||s.match(/CD/g)) {
        if(s.match(/AB/g)) {
            s = s.replace(/AB/,"")
        }
        if(s.match(/CD/g)) {
            s = s.replace(/CD/,"")
        }
    }
    return s.length
};
//文字列からABとCDけす、けしたあとにAB,CDできたらそれもけす