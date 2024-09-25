/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (right === left || !head.next) return head;

  const dummy = new ListNode();
  dummy.next = head;
  let leftBorder = dummy;
  for (let i = 1; i < left; i++) {
    leftBorder = leftBorder.next;
  }

  let first = leftBorder.next;
  let pre = first;
  let curr = pre.next;

  for (let i = left; i < right; i++) {
    const next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }

  leftBorder.next = pre;
  first.next = curr;

  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const s1 = new ListNode(1);
const s2 = new ListNode(2);
const s3 = new ListNode(3);
const s4 = new ListNode(4);
const s5 = new ListNode(5);

s1.next = s2;
s2.next = s3;
s3.next = s4;
s4.next = s5;

const r1 = reverseBetween(s1, 1, 2);
console.log(r1.next.val);
