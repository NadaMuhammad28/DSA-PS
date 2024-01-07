//Reverse array in place
const reverse = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];

    l++;
    r--;
  }

  return arr;
};

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([6, 7, 8, 9]));
