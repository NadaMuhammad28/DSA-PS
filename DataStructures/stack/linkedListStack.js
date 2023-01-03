import LinkedList from "../singleLinkedList/implementation.js";
class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.getSize();
  }

  push(val) {
    this.list.prepend(val);
  }
  pop() {
    this.list.removeFrom(0);
  }
  peek() {
    return this.list.head.value;
  }
  print() {
    return this.list.print();
  }
}

const s = new LinkedListStack();
s.push(10);
s.push(20);
s.push(30);
s.pop();
console.log(s.peek());
s.print();
