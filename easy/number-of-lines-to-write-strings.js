var numberOfLines = function(widths, s) {
    let row = 1
    let sum = 0
    for(let i=0;i<s.length;i++) {
        const width = widths[s.charAt(i).charCodeAt()-97]
        if(sum+width>100) {
            row++
            sum = 0
            sum += width
        } else {
            sum += width
        }
    }
    return [row,sum]
};
//引数配列の要素に各アルファベットの幅がはいってる
//引数配列へのアクセス方法
//"a".charCodeAt()が97だから-97したらaきたら引数配列の0観るようになる
//各文字と文字コードとったら-97すればいい感じにとってこれるようになる
