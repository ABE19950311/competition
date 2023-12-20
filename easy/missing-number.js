var missingNumber = function(nums) {
    const sort =nums.sort()
    let array = new Array(sort.length+1).fill(0)
    for(let i=0;i<sort.length;i++) {
        array[sort[i]] = array[sort[i]] + 1
    }
    for(let j=0;j<array.length;j++) {
        if(array[j]==0) {
            return j
        }
    }
};
//順番にならべるためソート
//何らかの値が１つない状態のため、引数配列＋１の長さで配列を宣言。初期値に０を入れておく
//for文で配列みていって、出現した値の位置に＋１して存在フラグを立てる、配列はソートしてあるから、登場した数字の位置は一致する
//加算しおわったら、一回も登場してない（値０）の位置をさがしてreturn