var mergeTwoLists = function(l1, l2) {
    let head = {val:-1,next:null}
    let dummy = head
    while(l1&&l2) {
        if(l1.val>l2.val) {
            dummy.next = l2
            l2 = l2.next
        } else {
            dummy.next = l1
            l1 = l1.next
        }
        dummy = dummy.next
    }
    dummy.next = l1 || l2
    return head.next
};

//list全体用のheadとnodeポインタ連結用のダミーを用意
//ダミーをつくらないと大元のリストが変わって全体を繋げられない
//dummyのnextにnodeを入れてl1 = l1.next等で更新して 1lかl2がnullになるまでループ
//dummy = dummy.nextをしないとポインタがつながらない（一番最初のnextが変わるだけになる）
//dummy.next = l1 || l2で残ってるnullじゃ無い方をつなげる
//list全体用のheadをreturnで返して終了