var addStrings = function(num1, num2) {
    let n1 = num1.length-1
    let n2 = num2.length-1
    let carry = 0
    let sum = 0
    let ans = ""

    while(n1>=0 || n2>=0) {
        sum = carry
        if(n1>=0) sum += Number(num1.charAt(n1))
        if(n2>=0) sum += Number(num2.charAt(n2))
        ans = sum%10 + ans
        carry = Math.floor(sum/10)
        n1--
        n2--
    }
    if(carry) ans = carry + ans
    return ans
};
//num1とnum2の足し算
//桁上がりのcarry　carry,ans計算用値保持sum 最終計算結果ans 宣言
//num1,num2おのおのの文字列長さ分ループする柔軟対応したいためwhile使う
//sumに桁上がり値とcharAtで取った値を数値にして足す
//num1 = "11", num2 = "123"
// 11
//123 をするイメージ
//sumが２３なら
//sum%10で一桁目の3が取り出せる
//前の計算結果の前に入れるため ans = sum%10 + ansの順番で計算する
//Math.floor(sum/10)で桁上がりを確認できる
//sum23なら 2
//最後に未処理の桁上がりがあったらansに足す　この際もansに足す順番に注意
