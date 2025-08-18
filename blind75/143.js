
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */



var reorderList = function(head) {

    let counter = 1
    let evenNodeStack = []
    let p = head

    while (p != null){
        if(counter%2 == 0){
            evenNodeStack.push(p)
        }
        counter++
        p = p.next
    }
    
    p = head

    while (!evenNodeStack.empty()){
        let evenNode = evenNodeStack.pop()
        
        p.next = evenNode
        evenNode.next = p.next
        p = evenNode.next
    }

    p.next = null

};

