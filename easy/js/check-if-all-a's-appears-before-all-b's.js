var checkString = function(s) {
    if(s.indexOf("a")==-1) return true
    let b = false

    for(let i=0;i<s.length;i++) {
        if(!b&&s[i]=="b") {
            b = true
        } else if(b&&s[i]=="a") {
            return false
        }
    }

    return true
};
//ab dakede no moziretu
//subeteno a ga b no maeni attara true
//a nai patern ha true kaesu
//b flag tuketoite flag aru zyoutai de a kitara false kaesu
