export class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
export class BinaryTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  insert(val) {
    const node = new Node(val);
    if (this.isEmpty()) this.root = node;
    else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) root.left = node;
      else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right == null) root.right = node;
      else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, val) {
    if (!root) return false;
    if (root.value === val) return true;
    if (root.value > val) {
      return this.search(root.left, val);
    } else {
      return this.search(root.right, val);
    }
  }
  //DFS:

  //prorde: Iterative approach

  IPreorderDFS() {
    const s = [this.root];
    const res = [];
    while (s.length) {
      let node = s.pop();
      res.push(node.value);
      if (node.right) s.push(node.right);
      if (node.left) s.push(node.left);
    }
    return res;
  }

  //prorder: recursion approach
  RPreorderDFS(root) {
    const res = [];

    //helper function
    const preorder = (root) => {
      if (root) {
        res.push(root.value);
        if (root.left) preorder(root.left);
        if (root.right) preorder(root.right);
      }
    };
    preorder(root);
    return res;
  }
  //------------------------------------------------------------------
  //INORDER

  //Iterative approch
  IInorderDFS(root) {
    const s = [];
    const res = [];
    let cur = root;
    while (cur || s.length) {
      while (cur) {
        s.push(cur);
        cur = cur.left;
      }
      cur = s.pop();
      res.push(cur.value);
      cur = cur.right;
    }
    return res;
  }

  //Recursive appprach

  RInorderDFS(root) {
    const res = [];
    const inOrder = (root) => {
      if (root) {
        if (root.left) inOrder(root.left);
        res.push(root.value);
        if (root.right) inOrder(root.right);
      }
    };
    inOrder(root);
    return res;
  }
  //------------------------------------------------------------------

  //PostOrder
  //[3,7,5,15,10]

  // IpostOrder(root) {
  //   const s1 = [root];
  //   const s2 = [];
  //   while (s1.length) {
  //     const node = s1.pop();
  //     s2.push(node.value);
  //     if (node.left) s1.push(node.left);

  //     if (node.right) s1.push(node.right);
  //   }
  //   console.log(s2);
  //   while (s2.length) {
  //     let node = s2.pop();
  //     s1.push(node);
  //   }
  //   return s1;
  // }

  IpostOrder() {
    let s = [this.root];
    let res = [];
    while (s.length) {
      let node = s.pop();
      res.unshift(node.value);
      if (node.right) s.unshift(node.right);
      if (node.left) s.unshift(node.left);
    }
    return res;
  }
  RPostorderDFS(root) {
    const res = [];
    const postorder = (root) => {
      if (root) {
        if (root.left) postorder(root.left);
        if (root.right) postorder(root.right);
      }
      res.push(root.value);
    };
    postorder(root);
    return res;
  }

  minmax() {
    let min = -Infinity;
    let max = 0;

    const minmaxHelper = (root, flag) => {
      if (!root.left && !root.right) return root.value;
      if (flag == "left") {
        console.log(root);
        return minmaxHelper(root.left);
      }

      if (flag == "right") {
        return minmaxHelper(root.right);
      }
    };

    min = minmaxHelper(this.root, "left");
    max = minmaxHelper(this.root, "right");
  }

  bfs() {
    let queue = [this.root];
    let res = [];
    while (queue.length) {
      let node = queue.shift();
      res.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return res;
  }
}

const t = new BinaryTree();
t.insert(10);
t.insert(5);
t.insert(15);
t.insert(3);
t.insert(7);
// console.log(t.search(t.root, 15));
// console.log(t.IPreorderDFS());
// console.log(t.RPreorderDFS(t.root));
// console.log(t.RInorderDFS(t.root));
// console.log(t.IInorderDFS(t.root));
// // console.log(t.RPostorderDFS(t.root));
// // console.log(t.IpostOrder(t.root));
// console.log(Math.ceil(3.33));
//
console.log(t.bfs());
