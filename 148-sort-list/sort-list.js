/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    var slow = head;
    var fast = head;
    var prev = null;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null;

    var left = sortList(head);
    var right = sortList(slow);

    return merge(left, right);
};

function merge(l1, l2) {
    var dummy = new ListNode(0);
    var current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }

        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    }
    if (l2 !== null) {
        current.next = l2;
    }

    return dummy.next;
}