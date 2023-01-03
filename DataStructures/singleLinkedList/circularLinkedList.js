class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  getLength() {
    return this.length;
  }

  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      node.next = this.head;
    }
  }
}
