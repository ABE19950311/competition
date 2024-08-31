var smallestRangeI = function(nums, k) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    let res = (max-min)-2*k
    return res>0?res:0
};
//引数kの値増減して配列の最大値、最小値の差分をとる
//mathmaxminにスプレッド構文で配列要素渡してmaxmin出す
//maxminから2*k(max,min二つの差をみる)引いた結果で0からあたいかを返す
//min+k>=max-k
//return 0
//else
//return (max-k)-(min+k)