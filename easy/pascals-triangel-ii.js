var getRow = function(row) {
    let result = [1]
    for(let i=1;i<=row;i++) {
        for(let j=i;j>0;j--) {
            if(i==j) {
                result[j] = 1
            } else {
                result[j] = result[j-1]+result[j]
            }
        }
    }
    return result
};
//配列先頭は必ず１のため宣言した時点で入れておく
//ループは１から始める
//二重ループでj
//i==jのときはjの位置に１を入れる
//その他の時はjの位置一個前と、現在値で加算
//i==jの時入れた1で値を作っていく
//[1]
//[1,1] i==j
//[1,1,1] i==j
//[1,2,1] j-1+j