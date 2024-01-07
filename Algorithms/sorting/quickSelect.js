const partition = (numsay, low, high) => {
  let i = low - 1;
  const pivot = high;
  for (let j = low; j < high; j++) {
    if (numsay[j] < numsay[pivot]) {
      i++;
      [numsay[i], numsay[j]] = [numsay[j], numsay[i]];
    }
  }
  [numsay[i + 1], numsay[pivot]] = [numsay[pivot], numsay[i + 1]];
  return i + 1;
};

const findKthLargest = (nums, k) => {
  let low = 0;
  let high = nums.length - 1;
  console.log(`high${high}`);
  //if sorted
  let kth = nums.length - k;
  console.log(`kth : ${kth}`);
  let pivot = 0;
  while (low <= high) {
    console.log("here");
    pivot = partition(nums, low, high);
    console.log(`pivot ${pivot}`);
    if (pivot == kth) {
      console.log("==this happend");

      return nums[pivot];
    }
    if (pivot < kth) {
      console.log("this happend");
      low = pivot + 1;
      console.log(low);
    }

    if (pivot > kth) high = pivot - 1;
  }
  return nums[pivot];
};

// console.log(findKthLargest([2, 1], 1));
