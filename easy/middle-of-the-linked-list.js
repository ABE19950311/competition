var middleNode = function(head) {
    let slow = head
    let fast = head
    while(fast&&fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};
//通常速度と速いやつ２つポインタ 用意して走らせる
//早いやつがnullになったタイミングでslowの位置が中央地点になる
//いつもの