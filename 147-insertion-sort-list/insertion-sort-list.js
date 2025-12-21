var insertionSortList = function(head) {
    if (!head || !head.next) return head;

    var dummy = new ListNode(0); // dummy node
    var curr = head; // start from head

    while (curr) {
        var prev = dummy;
        var nextCurr = curr.next; // save next node

        // find correct position to insert
        while (prev.next && prev.next.val < curr.val) {
            prev = prev.next;
        }

        // insert curr between prev and prev.next
        curr.next = prev.next;
        prev.next = curr;

        // move to next node
        curr = nextCurr;
    }

    return dummy.next;
};
