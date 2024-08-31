var deleteDuplicates = function(head) {
    let cur = head;
    while(cur) {
        if(cur.next!=null&&cur.val==cur.next.val) {
            cur.next=cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
};
//cur.val cur.next(pointer)  cur.next.val    cur.next.next   cur.next.next.val
//   1        *                  1                *                2
//cur.val cur.next   cur.next.val
//   1　　　　　*            2
//（ポインタ先をcur.next.nextに変える→参照先が重複値を見なくなる）