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
var deleteDuplicates = function(head) {
    let curr = head;
    let comparedNode = head;

    while (comparedNode !== null) {
      if (comparedNode.next) {
        if (comparedNode.next.val === comparedNode.val) {
          comparedNode = comparedNode.next;
          continue;
        }
      }
      curr.next = comparedNode.next;
      curr = curr.next;
      comparedNode = comparedNode.next;
    }
    return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const s1 = new ListNode(1);
const s2 = new ListNode(1);
const s3 = new ListNode(2);
const s4 = new ListNode(3);
const s5 = new ListNode(3);
s1.next = s2;
s2.next = s3;
s3.next = s4;
s4.next = s5;

const r1 = deleteDuplicates(s1).next.next.val;
console.log(r1);

// console.log(deleteDuplicates(s1).next.next.val);
