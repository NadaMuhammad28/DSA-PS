//READ: https://www.geeksforgeeks.org/sort-stack-using-temporary-stack/
//problem statement: Sort a stack using another stack
import Stack from "./Stack.js";

const insertionSort = (s) => {
  const temp = new Stack();

  while (!s.isEmpty()) {
    const el = s.pop();
    while (temp.peek() > el) {
      const removed = temp.pop();
      s.push(removed);
    }
    temp.push(el);
  }
  return temp;
};

const s = new Stack();
s.push(34);
s.push(3);
s.push(31);
s.push(98);
s.push(92);
s.push(23);
s.print();
const sortedStack = insertionSort(s);
sortedStack.print();
//t-c--> o(n^2)
//s-c--> o(n)
