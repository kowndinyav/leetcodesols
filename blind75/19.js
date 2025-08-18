var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head); // handles edge cases like removing head
    let first = dummy;
    let second = dummy;

    // Move first ahead by n+1 steps so there's a gap of n nodes between first and second
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both until first hits the end
    while (first) {
        first = first.next;
        second = second.next;
    }

    // Remove the node
    second.next = second.next.next;

    return dummy.next;
};

console.log(removeNthFromEnd())