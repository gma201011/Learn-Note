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
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  const dummy = new ListNode();
  dummy.next = head;
  let curr = dummy;

  while (curr.next !== null && curr.next.next !== null) {
    if (curr.next.val === curr.next.next.val) {
      const nextVal = curr.next.val;
      while (curr.next && curr.next.val === nextVal) {
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }
  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const s0 = new ListNode(1);
const s1 = new ListNode(1);
const s2 = new ListNode(2);
const s3 = new ListNode(3);
const s4 = new ListNode(3);
const s5 = new ListNode(4);
const s6 = new ListNode(4);
const s7 = new ListNode(4);
const s8 = new ListNode(5);
const s9 = new ListNode(5);
const s10 = new ListNode(8);
s0.next = s1;
s1.next = s2;
s2.next = s3;
s3.next = s4;
s4.next = s5;
s5.next = s6;
s6.next = s7;
s7.next = s8;
s8.next = s9;
s9.next = s10;
// deleteDuplicates(s0)
console.log(deleteDuplicates(s0).val);

// Ans: 1 -> 2 -> 5
