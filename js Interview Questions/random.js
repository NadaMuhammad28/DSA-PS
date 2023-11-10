/*

59. Implement a function that returns an updated array with r right rotations on an array of integers a .
Example:

Given the following array: [2,3,4,5,7]
Perform 3 right rotations:
First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

return [4,5,7,2,3]

Answer:

let rotate = function (arr, numberOfShifts) {
  let deletedArray = arr.splice(arr.length - numberOfShifts);
  console.log(deletedArray);
  return [...deletedArray, ...arr.splice(0, numberOfShifts)];
};
console.log(rotate([44, 1, 22, 111], 5));
*/

//////////////////////////////////////////////////////
var scope = "global scope";
function check() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}
console.log(check()());
