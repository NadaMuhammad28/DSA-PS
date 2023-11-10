const merge = (leftArr, rightArr) => {
  let output = [];
  let lpr = 0,
    rpr = 0;
  while (lpr < leftArr.length && rpr < rightArr.length) {
    if (leftArr[lpr] < rightArr[rpr]) {
      output.push(leftArr[lpr]);
      lpr++;
    } else {
      output.push(rightArr[rpr]);

      rpr++;
    }
  }

  return [...output, ...leftArr.slice(lpr), ...rightArr.slice(rpr)];
};
const MergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let lPr = 0;
  let rPr = arr.length;
  let mid = Math.floor(arr.length / 2);

  let leftArr = arr.slice(lPr, mid);
  let rightArr = arr.slice(mid, rPr);
  console.log(leftArr, rightArr);
  return merge(MergeSort(leftArr), MergeSort(rightArr));
};

const arr = [38, 27, 43, 3, 9, 82, 10];

console.log(MergeSort(arr));
// console.log(merge([3, 43, 45], [9, 10, 18, 48]));
