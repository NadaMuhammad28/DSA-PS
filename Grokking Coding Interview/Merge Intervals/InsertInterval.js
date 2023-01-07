//LINK: https://leetcode.com/problems/insert-interval/

const insertInterval = (arr, interval) => {
  let prev = arr[0];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] > interval[0]) {
      arr.splice(i, 0, interval);
      break;
    }
  }

  for (let j = 1; j < arr.length; j++) {
    if (prev[1] >= arr[j][0]) {
      prev = [prev[0], Math.max(prev[1], arr[j][1])];
    } else {
      res.push(prev);
      prev = arr[j];
    }
  }
  res.push(prev);
  return res;
};

// console.log(
//   insertInterval(
//     [
//       [2, 3],
//       [5, 7],
//     ],
//     [1, 4]
//   )
// );
/////////
// console.log(
//   insertInterval(
//     [
//       [1, 3],
//       [6, 9],
//     ],
//     [2, 5]
//   )
// );
////////////
console.log(
  insertInterval(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
//T_C: o(n)
//S_C: o(n)
