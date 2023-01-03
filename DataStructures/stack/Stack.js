//BY ARRAY METHODS
class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
  //o(1)
  push(val) {
    this.items.push(val);
  }
  //o(1)
  pop() {
    if (this.isEmpty()) return console.log("underflow");
    const removedItem = this.items.pop();
    return removedItem;
  }
  //o(1)
  peek() {
    if (this.isEmpty()) return console.log("stack is empty");
    return this.items[this.items.length - 1];
  }
  print() {
    if (this.isEmpty()) return console.log("stack is empty");
    console.log(this.items);
  }

  get;
}

//BY POINTER
/*class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  isEmpty() {
    return this.top <= 0;
  }
  size() {
    return this.top + 1;
  }

  push(val) {
    this.top++;
    this.items[this.top] = val;
  }
  pop() {
    if (this.top < 0) return console.log("stack underflow");
    const x = this.items[this.top];
    this.top--;
    return x;
  }
  peek() {
    return this.items[this.top];
  }
  print() {
    let res = [];
    for (let i = this.top; i >= 0; i--) {
      res[i] = this.items[i];
    }

    console.log(res);
  }
}*/
export default Stack;
