//Given two lists of intervals, find the intersection of these two lists.
// Each list consists of disjoint intervals sorted on their start time.
const intersection = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < arr1.length && j < arr2.length) {
    let a_oberlap_b = arr2[j][0] <= arr1[i][0] && arr1[i][0] <= arr2[j][1];
    let b_oberlap_a = arr2[j][0] >= arr1[i][0] && arr1[i][0] >= arr2[j][1];

    if (a_oberlap_b || b_oberlap_a) {
      res.push([
        Math.max(arr2[j][0], arr1[i][0]),
        Math.min(arr2[j][1], arr1[i][1]),
      ]);
    }

    if (arr1[i][1] < arr2[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
};
// console.log(
//   intersection(
//     [
//       [1, 3],
//       [5, 6],
//       [7, 9],
//     ],
//     [
//       [2, 3],
//       [5, 7],
//     ]
//   )
// );
//////
console.log(
  intersection(
    [
      [1, 3],
      [5, 7],
      [9, 12],
    ],
    [[5, 10]]
  )
);
