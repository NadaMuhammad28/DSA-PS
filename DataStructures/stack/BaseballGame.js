//PROBLEM LINK: https://leetcode.com/problems/baseball-game/submissions/891404523/
const calPoints = function (operations) {
  let s = [];
  let output = 0;
  for (let op of operations) {
    switch (op) {
      case "C": {
        s.pop();
        break;
      }

      case "D": {
        s.push(+s[s.length - 1] * 2);
        break;
      }

      case "+": {
        let sum = +s[s.length - 1] + +s[s.length - 2];
        s.push(sum);
        break;
      }

      default: {
        s.push(op);
      }
    }
  }
  for (let score of s) {
    output += +score;
  }
  return output;
};

// T-C--> o(n)
// s-c --> o(n)
