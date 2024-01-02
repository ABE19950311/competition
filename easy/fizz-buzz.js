var fizzBuzz = function(n) {
    let res = []
    for(let i=1;i<=n;i++) {
        if(i%15==0) {
            res.push("FizzBuzz")
        } else if(i%3==0) {
            res.push("Fizz")
        } else if(i%5==0) {
            res.push("Buzz")
        } else {
            res.push(String(i))
        }
    }
    return res
};
//いつもの
//if文の処理順に気を付ける（１５のときi%3かi%5先にしてるとそっちを処理してif終わる
//i%3のときFizz入れて数字はいれないため全部if elseにする