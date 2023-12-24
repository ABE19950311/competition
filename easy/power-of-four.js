var isPowerOfFour = function(n) {
    while(n>1) {
        if(n%4==0) {
            n=n/4
        } else {
            return false
        }
    }
    return n==1
};
//power-of-therr.jsの４の累乗ver