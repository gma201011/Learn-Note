// 遍歷二叉樹

const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};

// root -> left -> right
function preOrder1(root) {
  if (!root) return;

  console.log("Current: ", root.val);
  preOrder1(root.left);
  preOrder1(root.right);
}

// preOrder1(root);

// left -> root -> right

function preOrder2(root) {
  if (!root) return;

  preOrder2(root.left);
  console.log("Current: ", root.val);
  preOrder2(root.right);
}

preOrder2(root);

// left -> right -> root

function preOrder3(root) {
  if (!root) return;

  preOrder3(root.left);
  preOrder3(root.right);
  console.log("Current: ", root.val);
}

preOrder3(root);

