//https://leetcode.com/problems/middle-of-the-linked-list/

//Two solutions
//t-c: o(n)
// s-c: o(!)
const getSize = (head) => {
  let size = 0;
  while (head) {
    size++;
    head = head.next;
  }
  return size;
};
//this pattern is important
//o(n)
var middleNode = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
//o(2n)--> o(n)
var middleNode = function (head) {
  let size = getSize(head);
  const mid = Math.round((size - 1) / 2);
  let midNode = head;
  for (let i = 0; i < mid; i++) {
    midNode = midNode.next;
  }
  return midNode;
};
