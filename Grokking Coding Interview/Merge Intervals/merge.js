//Given a list of intervals, merge all the overlapping intervals
// to produce a list that has only mutually exclusive intervals.
const mergeIntervals = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);
  let res = [];
  let prev = arr[0];
  //first: sort the array
  for (let i = 1; i < arr.length; i++) {
    //if the end of the previous interval is larger or equal to the start of the current interval
    //this ensures that there's an overlapping between the two intervals
    if (prev[1] >= arr[i][0]) {
      //save the beginng of the previous interval
      // and the larger end
      //we will save it in the prev var to continously merge the next intervals
      prev = [prev[0], Math.max(prev[1], arr[i][1])];
    } else {
      res.push(prev);
      prev = arr[i];
    }
  }
  res.push(prev);
  return res;
};

// console.log(
//   mergeIntervals([
//     [1, 4],
//     [2, 5],
//     [7, 9],
//   ])
// );

//////////////////
// console.log(
//   mergeIntervals([
//     [6, 7],
//     [2, 4],
//     [5, 9],
//   ])
// );
/////////////////////
console.log(
  mergeIntervals([
    [1, 4],
    [2, 6],
    [3, 5],
  ])
);
