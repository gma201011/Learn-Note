// 二叉樹（binary tree）定義：
// 可以是 null，空樹也是樹
// 非空的樹由根節點、左子樹、右子樹組成，左右子樹也必須是二叉樹

// Ex:
//   1
//  / \
// 2   3

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);

one.left = two;
one.right = three;

// P.S. 節點 two 與 three 都是二叉樹，只是左右節點都是 null