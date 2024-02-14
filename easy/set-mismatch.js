var findErrorNums = function(nums) {
    let dup = 0
    let non = 0
    for(let i=1;i<=nums.length;i++) {
        let count = nums.filter(data => data==i).length
        if(count>=2) {
            dup = i
        } else if(count==0) {
            non = i
        }
    }
    return [dup,non]
};
//特定の配列の長さから重複してるやつと抜けてるやつ探す
//配列長さ５なら本来は[1,2,3,4,5]と揃う
//ループで本来の要素分回す
//filterかけたら普通１重複２以上ない０と判断できる
