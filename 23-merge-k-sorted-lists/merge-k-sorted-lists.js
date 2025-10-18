/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    function mergeTwoLists(l1, l2) {
        var dummy = new ListNode(-1);
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

        if (l1 !== null) current.next = l1;
        if (l2 !== null) current.next = l2;

        return dummy.next;
    }

    if (lists.length === 0) return null;

    while (lists.length > 1) {
        var mergedLists = [];

        for (var i = 0; i < lists.length; i += 2) {
            var l1 = lists[i];
            var l2 = (i + 1 < lists.length) ? lists[i + 1] : null;
            var merge = mergeTwoLists(l1, l2);
            mergedLists.push(merge);
        }

        lists = mergedLists;
    }

    return lists[0];
};