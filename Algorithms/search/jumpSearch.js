const jumpSearch = (arr, n, key) => {
  //n==> arr size, step=> of the jump
  let step = Math.floor(Math.sqrt(n));
  let low = 0;
  let high = step;
  //res
  let tar = -1;
  //-----------------------
  while (arr[high] < key) {
    //if the key is larger than the high

    if (arr[high] < key) {
      low = high;
      high += step;
    }
    ///
  }

  if (arr[low] == key) tar = low;
  if (arr[high] == key) tar = high;

  if (arr[high] > key || high > n - 1) {
    for (let i = high - 1; i > low; i--) {
      if (arr[i] === key) tar = i;
    }
  }

  return `RESULT: ${tar}`;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(jumpSearch(arr, arr.length, 8));

//-------------------------------------------------------------------------------------------

// Jump Search is a searching algorithm for sorted arrays.
//umping ahead by fixed steps or skipping some elements in place of searching all elements.
//
//The increasing order of performance is:
//t-c --> o(n/m)
//linear search  <  jump search  <  binary search
