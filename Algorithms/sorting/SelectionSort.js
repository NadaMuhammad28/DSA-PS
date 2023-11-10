const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
    // console.log(arr);
  }
  return arr;
};
const arr = [64, 25, 12, 22, 11, 28, 98, 1];
const res = SelectionSort(arr);
// console.log(res);
//time complexity : o(n^2)
//space complexity: o(1)
//https://www.geeksforgeeks.org/selection-sort/?ref=lbp
console.log(arr);
