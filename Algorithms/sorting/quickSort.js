const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let leftP = []; //smaller <p
  let rightP = []; //larger >p
  const pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] > pivot ? rightP.push(arr[i]) : leftP.push(arr[i]);
  }

  return [...quickSort(leftP), pivot, ...quickSort(rightP)];
};

/////////////////QUICK SORT WITH BETTER SPACE COMPLEXITY (IN PLACE)////////////////////
//helper function to implement partioning the array
// const partition = (array, low, high) => {
//   let i = low - 1; //-1
//   const pivot = high; //len-1
//   for (let j = low; j < high; j++) {
//     if (array[j] < array[pivot]) {
//       i++;
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
//   [array[i + 1], array[pivot]] = [array[pivot], array[i + 1]];
//   console.log(array);
//   return i + 1;
//   c;
// };

const quickSortInPlace = (arr, low, high) => {
  if (low < high) {
    let p = partition(arr, low, high);
    quickSortInPlace(arr, low, p - 1);
    quickSortInPlace(arr, p + 1, high);
  }
  return arr;
};
const a = [10, 80, 30, 90, 40, 50, 70];
// const res = quickSortInPlace(a, 0, a.length - 1);
// console.log(res);

const p = (arr, low, high) => {
  let i = low - 1;
  let pivot = high;
  for (let j = low; j < high; j++) {
    if (arr[j] < arr[pivot]) {
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
  [arr[i + 1], arr[pivot]] = [arr[pivot], arr[i + 1]];
  return i + 1;
};

const q = (arr, low, high) => {
  if (low < high) {
    let piv = p(arr, low, high);
    q(arr, low, piv - 1);
    q(arr, piv + 1, high);
  }
  return arr;
};

console.log(q(a, 0, a.length - 1));
