var mySqrt = function(x) {
    let start = 0
    let end = x
    while(start<=end) {
        let mid = Math.floor((start+end)/2)
        if(mid*mid<=x && (mid+1)*(mid+1)>x) {
            return mid
        } else if(mid*mid<x) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
};
//二分探索
//mid*midがtarget(x)以下でmid+1*mid+1がtarget超えたらreturn
