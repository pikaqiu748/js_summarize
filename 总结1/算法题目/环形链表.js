/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let nodeSet = new Set();
  while (head) {
    if (nodeSet.has(head.next)) {
      return true;
    }
    nodeSet.add(head)
    head = head.next;
  }
  return false;
};