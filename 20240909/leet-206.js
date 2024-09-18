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
var reverseList = function (head) {
  let preNode = null;
  let currNode = head
  while (currNode) {
    let nextNode = currNode.next;
    currNode.next = preNode;
    preNode = currNode;
    currNode = nextNode;
  }
  return preNode;
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

reverseList(s1);
