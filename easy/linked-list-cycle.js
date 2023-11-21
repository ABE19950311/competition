var hasCycle = function(head) {
    let fast = head
    while(fast&&fast.next) {
        head = head.next
        fast = fast.next.next
        if(head==fast) return true
    }
    return false
};
//通常速度で動かすポインタと早いポイント２種類用意する
//listが循環していれば、２つのポインタが重なる時が来る
