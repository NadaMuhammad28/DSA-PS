import { Node, BinaryTree } from "./implementation.js";

class BFS extends BinaryTree {
  constructor() {
    super();
  }

  arrayImplementation() {
    let s = [this.root];
    let res = [];

    while (s.length) {
      let node = s.shift();
      console.log(node.value);
      console.log(s);
      res.push(node.value);
      if (node.left) s.push(node.left);
      if (node.right) s.push(node.right);
    }

    return res;
  }
}
const t = new BFS();
t.insert(10);
t.insert(5);
t.insert(15);
t.insert(3);
t.insert(7);
console.log(t.arrayImplementation());
