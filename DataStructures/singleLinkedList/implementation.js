class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    //create a node
    const node = new Node(value);
    //if empty
    //one of them
    if (this.isEmpty()) {
      this.head = node;
    }

    //if not
    else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }
  // at the end
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) this.head = node;
    else {
      let prev = this.head;

      while (prev.next) {
        prev = prev.next;
      }
      // console.log(prev);
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.prepend(value);
    else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) return;
    if (index == 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      let removed = prev.next;

      prev.next = removed.next;
    }
    this.size--;
  }

  removeVal(val) {
    if (this.isEmpty()) return null;
    if (this.head.value === val) {
      this.head = this.head.next;
      this.size--;
      return val;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value != val) {
        prev = prev.next;
      }
      if (prev.next) {
        let removed = prev.next;
        prev.next = removed.next;
        this.size--;
        return val;
      } else {
        console.log("value not found");
      }
    }
  }

  print() {
    let res = [];
    if (this.isEmpty()) console.log("List is Empty");
    else {
      let current = this.head;
      let printMsg = ``;
      while (current) {
        // console.log(current.value);
        // printMsg += " " + current.value;
        res.push(current.value);
        current = current.next;
      }
      console.log(res);
    }
  }

  search(val) {
    if (this.isEmpty()) return console.log("List is Empty");
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.value == val) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  reverse() {
    if (this.isEmpty()) console.log("Empty");
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      //reverse
      current.next = prev;
      //advance prev
      prev = current;
      //advance cur
      current = next;
    }
    console.log(prev);
    this.head = prev;
    return this.head;
  }

  isPalindrom() {
    let rev = this.reverse(this.head);
    if (this.head == rev) return true;
    return false;
  }
}

// const l = new LinkedList();
// l.append(2);
// l.append(4);
// l.append(6);
// l.append(4);
// l.append(2);
// l.append(9);

// // r = l.reverse2();
// // console.log(r);
// // l.print();
// // console.log(l.isPalindrom());
// // l.print();
// let m = [1, 2, 4];
// function multiply(e) {
//   return e * e;
// }
// m.forEach((el, index) => (m[index] = el * el));

// console.log(m);
export default LinkedList;
