var reverseList = function(head) {
    let cur = head
    let prev = null
    let next = null
    while(cur) {
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};
//[1,2,3,4,5]

//1loop
//cur.next = prev
//1,null
//prev = cur
//1,null
//curを進めるためにnextにあらかじめリンク先を代入しておく
//cur = next
//2,3,4,5

//2loop
//next = cur.next
//3,4,5
//cur.next = prev
//2,1,null
//prev = cur
//2,1,null
//cur = next
//3,4,5
