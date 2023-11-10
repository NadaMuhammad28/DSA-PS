"use strict";

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
// mistypeVarible = 17; /err

// {
//   function s() {
//     console.log("helllo drom the blllllllf");
//   }
// }
// s();

let x = 3;

let a = x + "";
console.log(typeof a);
console.log(typeof NaN);
console.log(isNaN("2"));

hi();
(function () {
  var n = 4;
  console.log("executed");
})();

function hi() {
  console.log("hi");
}
