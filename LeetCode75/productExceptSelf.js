var productExceptSelf1 = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let op = [];
  for (let i = 0; i < nums.length; i++) {
    let calc = 1;

    while (r >= 0) {
      if (r !== l) {
        calc *= nums[r];
      }
      r--;
    }
    op[l] = calc;
    r = nums.length - 1;
    l++;
  }
  return op;
};
/////////////////////////////

var productExceptSelf = function (nums) {
  let res = [];
  for (let k = 0; k < nums.length; k++) {
    res[k] = 1;
  }
  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
    console.log(prefix);
  }

  let postfix = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= postfix;
    postfix *= nums[j];
  }
  return res;
};
let nums = [1, 2, 3, 4];
let y = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums));
