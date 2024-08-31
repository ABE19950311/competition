var removeElements = function(head, val) {
    if(!head) return head
    let current = head;

    while(head) {
        if(head.val==val) {
            head=head.next
        } else {
            break;
        }
    }

    while(current.next) {
        if(current.next.val==val) {
            current.next = current.next.next
        } else{
            current = current.next
        }
    }
    return head;
};
//冒頭のwhileは、[7,7,7,7]のようにターゲットが連続しているやつに対処するため
//あとは値みて、ポインタを付け替える
//ポインタつけかえとリンク移行を並行ですると消し損ねがでるためif elseで対応する