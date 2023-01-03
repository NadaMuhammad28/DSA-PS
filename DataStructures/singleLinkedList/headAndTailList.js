class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prPend(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.prPend(val);
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  insert(index, val) {
    if (index === 0 || this.isEmpty()) return this.prPend(val);

    const node = new Node(val);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    node.next = prev.next;
    prev.next = node;
  }

  removeFromStart() {
    if (this.isEmpty()) return null;
    // if (this.head === this.tail) {
    //   this.head = null;
    //   this.tail = null;
    // } else {
    this.head = this.head.next;

    this.size--;
  }
  removeFromEnd() {
    if (this.isEmpty()) return null;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = this.tail.next;
      this.tail = prev;
    }
  }
  removeFrom(index) {
    if (this.isEmpty()) return console.log("EMPTY LIST ");
    if (index === 0) {
      return (this.head = this.head.next);
    }

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    let removed = prev.next;
    prev.next = removed.next;
    this.size--;
  }

  removeVal(val) {
    if (this.isEmpty()) return console.log("EMPTY LIST NO VAL FOUND");
    if (this.head.value === val) {
      return this.removeFrom(0, val);
    }
    let prev = this.head;
    while (prev.next.value !== val && prev.next) {
      prev = prev.next;
    }
    let removed = prev.next;
    prev.next = removed.next;

    this.size--;
  }

  search(val) {
    if (this.isEmpty()) return console.log("LIST IS EMPTY");

    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === val) return index;

      current = current.next;
      index++;
    }

    return -1;
  }
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  print() {
    let res = [];

    let current = this.head;
    while (current) {
      res.push(current.value);
      current = current.next;
    }

    return res;
  }
}

const l = new LinkedList();
// l.prPend(1);
// l.append(2);

// l.append(3);
// console.log(l.print());

// l.removeFromEnd();
// l.removeFromEnd();
// l.removeFromEnd();

// console.log(l.print());
// l.reverse();
// console.log(l.print());
console.log("abb"[0]);
var wordPattern = function (pattern, s) {
  str = s.split(" ");
  console.log(pattern.length);
  // if (pattern.length !== str.lenght) return false;
  let m = new Map();

  for (let i = 0; i < str.length; i++) {
    if (m.has(pattern[i])) {
      if (m.get(pattern[i]) !== str[i]) return false;
    } else {
      m.set(pattern[i], str[i]);
    }
  }
  console.log([...m.values()]);
  console.log([...new Set(m.values())]);

  return [...m.values()].length === [...new Set(m.values())].length;
};

console.log(wordPattern("abba", "dog cat cat dog"));
