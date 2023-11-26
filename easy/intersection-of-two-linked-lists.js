var getIntersectionNode = function(headA, headB) {
    if(!headA||!headB) return null
    let curA = headA
    let curB = headB
    while(curA!=curB) {
        curA = !curA ? headB:curA.next
        curB = !curB ? headA:curB.next
    }
    return curA
};
//二つのリストの交差点を出す
//どっちかがnullなら交差しないのでnull返す
//値が一致しない間ループ
//nextがnullになったらもう片方のリストいれて交差するまで回す