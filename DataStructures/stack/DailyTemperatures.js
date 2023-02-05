//PROBLEM: https://leetcode.com/problems/daily-temperatures/
//IDEA => monotonic decreasing stack
import Stack from "./Stack.js";

const get = (temps) => {
  const op = new Array(temps.length).fill(0);
  const s = new Stack();
  for (let i = 0; i < temps.length; i++) {
    if (s.isEmpty()) {
      s.push([temps[i], i]);
    } else {
      s.print();
      while (!s.isEmpty() && s.peek()[0] < temps[i]) {
        let [temp, index] = s.pop();
        op[index] = i - index;
      }
      s.push([temps[i], i]);
    }
  }
  return op;
};
console.log(get([73, 74, 75, 71, 69, 72, 76, 73]));
