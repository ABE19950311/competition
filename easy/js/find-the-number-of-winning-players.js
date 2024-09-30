var winningPlayerCount = function(n, pick) {
    let count = 0
    let obj = {}
    let win = []

    for(let i=0;i<pick.length;i++) {
        let player = pick[i][0]
        let ball = pick[i][1]
        let key = `${player}-${ball}`
        obj[key] = obj[key]?obj[key]+1:1
    }

    Object.entries(obj).forEach((key)=>{
        let player = Number(key[0].split("-")[0])
        let ball = key[1]
        if(ball>=player+1&&!win.includes(player)) {
            count++
            win.push(player)
        }
    })

    return count
};
//[[player,ball][]...]
//全要素数えて行って、ball>=player+1を満たすplayer数返す
//player,ballでkeyで一意keyつくってballcount
//objectentriesあたりで結果みていく
//すでに条件満たしたplayerは配列にかくりする