/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let l1 = list1;
    let l2 = list2;

    let head = new ListNode();
    let curr = head;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    }
    if (l1) {
      curr.next = l1;
    }

    if (l2) {
      curr.next = l2;
    }

    // curr.next = l1 !== null ? l1 : l2;

    return head.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const s1 = new ListNode(1);
const s2 = new ListNode(2);
const s3 = new ListNode(4);
s1.next = s2;
s2.next = s3;

const t1 =new ListNode(1);
const t2 =new ListNode(3);
const t3 =new ListNode(4);
t1.next = t2;
t2.next = t3;

mergeTwoLists(s1, t1);

