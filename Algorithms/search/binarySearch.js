//naive approach
const search = (arr, val) => {
  for (el of arr) {
    if (el === val) return val;
  }

  return -1;
};

// iterative method
const iBinarySearch = (arr, val) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    // console.log(arr[mid]);
    if (val === arr[mid]) {
      return mid;
    }
    if (val < arr[mid]) high = mid - 1;
    else {
      low = mid + 1;
    }
  }
  return -1;
};

const arr = [0, 1, 2, 3, 4, 5];
// console.log(search(arr, 98));
// console.log(iBinarySearch(arr, 4));

//t-c : o(log n )
// s-c o(1)
//needs a sorted arr

var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) high = mid - 1;
    if (target > nums[mid]) low = mid + 1;
  }

  if (target < nums[mid]) {
    return mid;
  } else {
    return mid + 1;
  }
};
console.log(searchInsert([1, 3, 5, 6], 0));
