class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//=============================================================================================================

//Given the head of a Singly LinkedList, wri
// a function to determine if the LinkedList has a cycle in it or not.
//https://leetcode.com/problems/linked-list-cycle/description/
const has_cycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }

  return false;
};

//T.C ==> o(n)
//S.C ==> o(1)
//=============================================================================================================
//Given the head of a LinkedList with a cycle, find the length of the cycle.
const getLength1 = function (head) {
  let slow = head;
  let fast = head;
  let length = 0;
  while (fast) {
    slow = slow.next;
    fast = fast.next.next;
    length++;
    if (fast == slow) return length;
  }

  return length;
};

const getSize = (slow) => {
  let current = slow;
  let length = 0;
  while (current) {
    current = current.next;
    length++;
    if (current == slow) return length;
  }
};

const getLength = function (head) {
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) return getSize(slow);
  }
};
//============================================================================================================================
const getCycleStart = function (head) {
  let p1 = head;
  let p2 = head;
  let length = getLength(head);
  console.log(length);
  for (i = 0; i < length; i++) {
    p2 = p2.next;
  }
  console.log(p2);
  while (p1 != p2) {
    p2 = p2.next;
    p1 = p1.next;
    // if (p1 == p2) return p1.value;
  }
  return p1.value;
};
//Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

//If the total number of nodes in the LinkedList is even, return the second middle node.
const middleNode = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow.value;
};

const middleNode2 = (head) => {
  let length = 0;
  function getLength() {
    let cur = head;
    while (cur) {
      length++;
      cur = cur.next;
    }
  }
  getLength();
  let mid = Math.floor(length / 2);
  let i = 0;
  let cur = head;
  while (i < mid) {
    cur = cur.next;
    i++;
  }
  return cur.value;
};

function reverse(head) {
  let prev = null;
  let current = head;
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
  head = prev;
  return head;
}

const print = (head) => {
  let cur = head;
  let res = [];
  while (cur) {
    res.push(cur.value);
    cur = cur.next;
  }
  return res;
};
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
// console.log("mid node " + middleNode2(head));
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
// reverse(head);
// console.log(print(head));

// console.log(`has cycle: ${has_cycle(head)}`);
head.next.next.next.next.next.next = head.next.next;
console.log(`has cycle: ${has_cycle(head)}`);
// console.log(getLength(head));
// head.next.next.next.next.next.next = head.next.next.next;
// console.log("c " + getCycleStart(head));
