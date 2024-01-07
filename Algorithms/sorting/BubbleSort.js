const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
};

const arr = [2, 5, 8, 4, 3, 1]; // [1,2,3,4,5,8]

const res = bubbleSort(arr);
console.log(res);
//https://www.geeksforgeeks.org/bubble-sort/?ref=lbp
//time complexity : o(n^2)
//space complexity: o(1)
