var distributeCandies = function(candyType) {
    return Math.min(new Set(candyType).size,candyType.length/2)
};
//setで重複除いた長さと、元配列の長さ比較して小さい方を返す
