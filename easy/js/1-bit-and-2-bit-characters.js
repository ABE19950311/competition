var isOneBitCharacter = function(bits) {
    let i = 0
    while(i<bits.length-1) {
        if(bits[i]==1) i++
        i++
    }
    return bits[i]==0
};
//１がきたら10か11で2bit分になる　なるためi++する
