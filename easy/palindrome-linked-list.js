var isPalindrome = function(head) {
    let slow = head
    let fast = head
    while(fast&&fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    slow = reverseNode(slow)

    while(slow) {
        if(head.val!=slow.val) return false
        head = head.next
        slow = slow.next
    }
    return true
};

function reverseNode(cur) {
    let prev = null
    let next = null
    while(cur) {
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
}
//低速ポインタslowと高速ポインタfastでlistの中間を見つける
//フロイドの周期検出アルゴリズム
//以前やった循環リストの中間点を見つけるやつがでてきた
//中間点見つけたら、中間点からnodeを逆順にする
//headと逆順リストの値を見て行って値不一致ならfalse