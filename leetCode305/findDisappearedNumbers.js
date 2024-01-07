//FIRST SOLUTION
var findDisappearedNumbers1 = function (nums) {
  let arr = [];
  let op = [];
  let foundBound = false;
  arr.length = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums.length) foundBound = true;
    if (arr[nums[i]] == undefined) arr[nums[i]] = [];
    arr[nums[i]].push(nums[i]);
  }
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] == undefined) op.push(j);
  }
  if (!foundBound) op.push(nums.length);

  return op;
};
//////////////////////////////////////////////////////////////////
var findDisappearedNumbers = function (nums) {
  let op = [];
  for (let i = 0; i < nums.length; i++) {
    let p = Math.abs(nums[i]) - 1;
    nums[p] = -1 * Math.abs(nums[p]);
    console.log(nums);
  }
  for (let j = 0; j < nums.length; j++) if (nums[j] > 0) op.push(j + 1);
  return op;
};
///////////////////////////////////////////////////////////////+

// const arr = [4, 3, 2, 7, 8, 2, 3, 1];
// console.log(findDisappearedNumbers(arr));
