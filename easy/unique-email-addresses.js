var numUniqueEmails = function(emails) {
    let res = new Set()
    emails.forEach((email)=>{
        let [local,domain] = email.split("@")
        local = local.replace(/\./g,"")
        let plus = local.indexOf("+")
        if(plus!=-1) {
            local = local.slice(0,plus)
        }
        res.add(local+"@"+domain)
    })
    return res.size
};
//メールアドレスから重複かつ無効なのを除いて有効なのは何個あるか
//.がついてるのはないのと同じあつかい
//replaceで消したいがそのままやるとドメインの.も消えるため分割してからやる
//+がついてると付いてる箇所までが有効なlocal名になる
//場所探してあったらその位置までまでにsliceする
//処理後のアドレスをSetオブジェクトに入れる、これで重複も弾ける