//PROBLEM LINK:

//FIRST APPROACH==>
/*
1- in place
2- no extra memory
3- t-c--> o(n)
4- s-c --> o(1)
*/
const deleteDuplicates = function (head) {
  let cur = head;
  if (cur === null) return head;
  while (cur.next) {
    let next = cur.next;
    if (cur.val === next.val) {
      cur.next = next.next;
    } else {
      cur = next;
      next = next.next;
    }
  }
  return head;
};
//==========================================================================================================================

//SECONDAPPROACH==>
/*
1- extra memory--> heap for look up
2- t-c--> o(n)
3- s-c --> o(n)
*/

var deleteDuplicates2 = function (head) {
  let m = new Map();
  let cur = head;
  let prev = null;

  while (cur) {
    if (m.has(cur.val)) {
      prev.next = cur.next;
      cur = cur.next;
    } else {
      m.set(cur.val, 1);
      prev = cur;
      cur = cur.next;
    }
  }

  return head;
};
