var lemonadeChange = function(bills) {
    let money = {
        5:0,
        10:0
    }
    for(let i=0;i<bills.length;i++) {
        if(bills[i]==5) {
            money[5] = money[5]+1
        }
        if(bills[i]==10) {
            if(money[5]==0) return false
            money[10] = money[10]+1
            money[5] = money[5]-1
        }
        if(bills[i]==20) {
            if(money[10]==0&&money[5]>=3) {
                money[5] = money[5]-3
            } else if(money[10]>=1&&money[5]>=1) {
                money[10] = money[10]-1
                money[5] = money[5]-1
            } else {
                return false
            }
        }
    }
    return true
};
//れもねーど買いに来た客全員に正しく釣渡せたらOK
//正しくだから２０ドル渡された際に金額あるけど15ドル返す札がない（１０ドル札２枚しかない等）場合はNG
//オブジェクトで釣り札状況管理する
//5ドルはそのまま追加、１０ドルは5ドル札なかったらfalse,20ドルは10ドルある場合とない場合で条件分岐する。条件どれにも一致しないならfalse
//false帰んなかったらおkとしてtrue