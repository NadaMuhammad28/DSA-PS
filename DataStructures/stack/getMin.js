//problem: https://leetcode.com/problems/min-stack/
class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    if (this.isEmpty()) {
      this.items.push([val, val]);
    } else {
      if (this.peek()[1] < val) {
        this.items.push([val, this.peek()[1]]);
      } else {
        this.items.push([val, val]);
      }
    }

    //  if( this.peek())
  }
  pop() {
    this.items.pop();
  }
  top() {
    return this.peek()[0];
  }
  getMin() {
    return this.peek()[1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  print() {
    console.log(this.items);
  }
}

const s = new Stack();
s.push(-2);
s.push(0);
s.push(-3);
s.print();
console.log(s.getMin());
s.pop();
console.log(s.top());
console.log(s.getMin());
//t-c--> o(1)
//s-c-->

let w = "pp";
w.localeCompare();
