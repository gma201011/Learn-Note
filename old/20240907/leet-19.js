/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


// Ver1：Check if skipped n node will be null or not
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0);
  let curr = dummy;
  dummy.next = head;

  if (isSkippedNode(n, head)) return dummy.next.next;

  while (curr.next) {
    let nextNode = curr.next;
    if (isSkippedNode(n, nextNode)) {
      curr.next = curr.next.next;
      break;
    }
    curr = curr.next;
  }
  return head;

  function isSkippedNode(n, node) {
    while (n > 0 && node) {
      node = node.next;
      n--;
    }

    return node === null;
  }
};

// Ver2: With slow-fast pointer
var removeNthFromEnd2 = function(head, n) {
  const dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}



function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const s1 = new ListNode(1);
// const s2 = new ListNode(2);
// const s3 = new ListNode(3);
// const s4 = new ListNode(4);
// const s5 = new ListNode(5);

// s1.next = s2;
// s2.next = s3;
// s3.next = s4;
// s4.next = s5;

// removeNthFromEnd2(s1, 3).val

console.log(removeNthFromEnd2(s1, 1));
// removeNthFromEnd2(s1, 1).val
