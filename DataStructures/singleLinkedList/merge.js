import { LinkedList } from "./implementation.js";
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  let current1 = list1.head;
  let current2 = list2.head;
  let next1 = current1.next;
  let next2 = current2.next;
  while (current1.next && current2.next) {
    console.log("ll");

    if (current2.value <= current1.value && next2.value >= current1.value) {
      current1.next = next2;
      current2.next = current1;
      current1 = next1;
    }
    // if (current1.value > current2.value) {
    //   current1.next = current2.next;
    //   current2.next = current1;
    // }

    current2 = current2.next;
    next1 = current1.next;
    next2 = current2.next;
  }

  return list2.print();
};
const l1 = new LinkedList();
l1.prepend(4);
l1.prepend(2);
l1.prepend(1);
const l2 = new LinkedList();
l2.prepend(4);
l2.prepend(3);
l2.prepend(1);

const l3 = new LinkedList();
l3.prepend(2);
const l4 = new LinkedList();
l4.prepend(1);
console.log(mergeTwoLists(l1, l2));

// console.log(mergeTwoLists(l3, l4));
// console.log(l1.print());
