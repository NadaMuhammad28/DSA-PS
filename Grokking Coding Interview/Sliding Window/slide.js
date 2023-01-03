//Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

const slidingWindow = (arr, k) => {
  let windowStart = 0;
  let sum = 0;
  let res = [];

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      res.push(sum / 5);
      sum -= arr[windowStart];
      windowStart++;
    }
  }

  return res;
};

// console.log(slidingWindow([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

const maxSum = (arr, k) => {
  let windowStart = 0;
  let sum = 0;
  let msum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      msum = Math.max(msum, sum);
      sum -= arr[windowStart];
      windowStart++;
    }
  }
  return msum;
};
// console.log(maxSum([2, 1, 5, 1, 3, 2], 3));

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
//Given an array of positive numbers and a positive number ‘S,’
//find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
// const Sequivelant = (arr, s) => {
//   let sum = 0;
//   let windowStart = 0;
//   let from = 0;
//   let to = 0;
//   let msum = Infinity;
//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     sum += arr[windowEnd];

//     while (sum >= s) {
//       msum = Math.min(msum, windowEnd - windowStart + 1);

//       sum -= arr[windowStart];
//       windowStart++;
//     }
//   }
//   return console.log("length " + msum);
// };

// const Sequivelant = (arr, s) => {
//   let windowStart = 0;
//   let sum = 0;
//   let length = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     // if(sum>= s){
//     while (sum >= s) {
//       length = Math.min(length, i - windowStart + 1);
//       sum -= arr[windowStart];
//       windowStart++;
//     }
//   }
//   return length;
// };

const Sequivelant = (arr, s) => {
  let windowStart = 0;
  let length = Infinity;
  let sum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];
    while (sum >= s) {
      length = Math.min(length, windowEnd - windowStart + 1);
      sum -= arr[windowStart];
      windowStart++;
    }
  }
  return length;
};
console.log(Sequivelant([3, 4, 1, 1, 6], 8));

const longestSubString = (word, k) => {
  let windowStart = 0;
  let m = new Map();
  let max = 0;
  for (let windowEnd = 0; windowEnd < word.length; windowEnd++) {
    m.get(word[windowEnd])
      ? m.set(word[windowEnd], m.get(word[windowEnd]) + 1)
      : m.set(word[windowEnd], 1);

    while (m.size > k) {
      m.get(word[windowStart]) > 1
        ? m.set(word[windowStart], m.get(word[windowStart]) - 1)
        : m.delete(word[windowStart]);
      windowStart++;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
};

// console.log(longestSubString("araaci", 2));

//Given a string, find the length of the longest
//substring, which has all distinct characters.
const lSub = (word) => {
  let windowStart = 0;
  let max = 0;
  let m = new Map();

  for (let windowEnd = 0; windowEnd < word.length; windowEnd++) {
    m.get(word[windowEnd])
      ? m.set(word[windowEnd], m.get(word[windowEnd]) + 1)
      : m.set(word[windowEnd], 1);

    while (m.get(word[windowEnd]) > 1) {
      m.set(word[windowStart], m.get(word[windowStart]) - 1);
      windowStart++;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  console.log(max);
};
// lSub("pwwkew");
