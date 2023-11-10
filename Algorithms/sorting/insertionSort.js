// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//     }
//     console.log(arr);
//   }
//   return arr;
// };

const arr = [2, 8, 5, 3, 9, 4];
// const res = insertionSort(arr);
// console.log(res);

// Time Complexity: O(N^2)
// Auxiliary Space: O(1)

//Basically, Insertion sort is efficient for small data values
//Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted.
const i = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j > 0; j--) {
      if (arr[j] > arr[j + 1]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }

  return arr;
};

console.log(i(arr));
