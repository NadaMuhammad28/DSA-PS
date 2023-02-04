//PROBLEM LINK: https://leetcode.com/problems/valid-parentheses/
import Stack from "./Stack.js";
const ValidParentheses = (s) => {
  const m = new Map();
  m.set("]", "[");
  m.set("}", "{");
  m.set(")", "(");

  const lex = new Stack();
  for (let i = 0; i < s.length; i++) {
    lex.push(s[i]);
  }

  while (!lex.isEmpty()) {
    let el = lex.pop();
    if (lex.peek() === m.get(el)) lex.pop();
  }
  console.log(lex.print());
};
ValidParentheses("{[]}");
