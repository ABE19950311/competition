var map = function(arr, fn) {
    const res = []

    for(let i=0;i<arr.length;i++) {
        res[i] = fn(arr[i],i)
    }

    return res
};
//arrを引数fnもとにつくりなおして返す
//fn kaki izureka
//function plusone(n) { return n + 1; }
//function plusI(n, i) { return n + i; }
//function constant() { return 42; }
//返り値配列に値れいていく
//plusoneはarr[i]わたせばよい
//plusIはarr[i]とループイテレータわたせばよい
//constantはなにもわたさなくてよい