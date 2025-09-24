
var mergeKLists = function(lists) {
    
    function mergeTwoLists(l1Head, l2Head){

        let mergedListHead = new ListNode()
        let mergedListNode = mergedListHead
        
        let l1Node = l1Head
        let l2Node = l2Head
        let lastNodePtr = null

        while (l1Node != null && l2Node != null){
            
            if(l1Node.val <= l2Node.val){
                mergedListNode.val = l1Node.val
                l1Node = l1Node.next
            }else{
                mergedListNode.val = l2Node.val
                l2Node = l2Node.next
            }

            lastNodePtr = mergedListNode
            mergedListNode.next = new ListNode()
            mergedListNode = mergedListNode.next
        }

        while (l1Node != null){
            mergedListNode.val = l1Node.val
            l1Node = l1Node.next

            lastNodePtr = mergedListNode
            mergedListNode.next = new ListNode()
            mergedListNode = mergedListNode.next
        }

        while (l2Node != null){
            mergedListNode.val = l2Node.val
            l2Node = l2Node.next

            lastNodePtr = mergedListNode
            mergedListNode.next = new ListNode()
            mergedListNode = mergedListNode.next
        }

        lastNodePtr.next = null
        
        return mergedListHead
    }

    if(lists.length == 0){
        return null
    }

    let mergedListHead = lists[0]

    for (let i = 1; i < lists.length;i++){
        mergedListHead = mergeTwoLists(mergedListHead, lists[i])
    }

    return mergedListHead

};