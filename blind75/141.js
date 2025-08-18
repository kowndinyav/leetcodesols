var hasCycle = function(head) {

    let slow = head
    let fast = head;

    let ret = false

    while (slow != null){

        // move by one post
        slow = slow.next

        if(fast.next != null && fast.next.next != null){
            // move by 2 pos, if possible
            fast = fast.next.next
        }else{
            // can't move by two pos and reach end, no loops
            ret = false
            break
        }

        if(slow == fast){
            ret = true
            break
        }
        
    }

  return ret

};