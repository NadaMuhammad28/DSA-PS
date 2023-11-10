var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let pivot = 0;
  let mid = low + Math.floor((high - low) / 2);
  console.log("mid" + mid);
  while (low <= high) {
    i;
    if (nums[low] > nums[high]) {
      high--;
      if (nums[high] > nums[high - 1] && nums[high] > nums[high + 1]) {
        pivot = high;
        break;
      }
    }
  }
  console.log(nums[pivot]);
  let op = -1;
  let l = nums.slice(pivot + 1);
  let r = nums.slice(0, pivot);
  // console.log(pivot);
  if (target < nums[pivot]) {
    for (let i = 0; i < l.length; i++)
      if (l[i] == target) {
        op = i + pivot + 1;
      }
  }
  return op;
};

console.log(search([1, 3], 0));
let a = [1, 3];
