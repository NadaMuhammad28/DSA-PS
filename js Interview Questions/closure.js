//for loop with let, var
// https://dmitripavlutin.com/simple-explanation-of-javascript-closures/
// https://medium.com/@mlgerardvla/the-most-popular-javascript-interview-question-can-you-get-settimeout-to-behave-972afceda50d
// for (var i = 0; i < 3; i++) {
//   setTimeout(
//     function (x) {
//       console.log(x);
//     }.bind(this, i),
//     i * 1000
//   );
// }
// for (let j = 0; j < 5; j++) {}
// console.log(j);
////////////////////////
function createIncrement() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }
  // let message = `Count is ${count}`;
  function log() {
    console.log(`Count is ${count}`);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?
// Why I am not getting Count is 3
// bcz, we are closed on variable message, but not on count
// closure is on variables and not on values
////////////////////////////////////////////////////////////////////////////////////
function createStack() {
  items = [];
  //  function setItems(item){
  //     this.items.push(item);
  //   }
  //   function getItems (){
  //     return this.items
  //   }
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}

// function createStack() {
//   // Write your code here...
// }
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
// stack.items; // => undefined
console.log(stack.items);

const length = 4;
const numbers = [];
for (var i = 0; i < length; i++) {
  numbers.push(i + 1);
}
numbers; // => ???
console.log(numbers);

var a = 1;
var b = 0;
while (a <= 3) {
  a++;
  b += a * 2;
  console.log(b);
}
console.log("f" - "a");
function huh({ a, b, c }) {
  [a, b, c] = [...arguments];
  console.log(arguments);
  console.log(a, b, c);
}
huh(1, 2, 3);
console.log(typeof null);

obj = { name: "nada" };
ob2 = obj;
ob3 = { name: "nada" };
console.log(obj === ob3);
//https://medium.com/@amsingh714/common-javascript-interview-question-what-is-a-closure-f1d947fef273
