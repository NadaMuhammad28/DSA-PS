//Given an array of sorted numbers and a target sum,
//find a pair in the array whose sum is equal to the given

const eqSum = (arr, target) => {
  let l = 0;
  let h = arr.length - 1;
  while (l < h) {
    if (arr[h] + arr[l] === target) return [l, h];
    if (arr[h] + arr[l] > target) h--;
    if (arr[h] + arr[l] < target) l++;
  }
};

// console.log(eqSum([1, 2, 3, 4, 6], 6));
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
//Hash table approach

const hashEqSum = (arr, target) => {
  const m = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (m.has(target - arr[i])) return [i, m.get(target - arr[i])];
    else {
      m.set(arr[i], i);
    }
  }
};

// console.log(hashEqSum([1, 2, 3, 4, 6], 6));
//===================================================================================================================================================================

//Given an array of sorted numbers,
// remove all duplicates from it.
//You should not use any extra space;
// after removing the duplicates in-place
// return the new length of the array.
const removeDuplicats = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = i - 1;
    if (arr[j] == arr[i]) {
      arr.splice(i, 1);
      // j++;
    }
    if (arr[k] == arr[i]) {
      arr.splice(k, 1);
      // j++;
    }
  }
  console.log(arr);
  return arr.length;
};

// console.log(removeDuplicats([2, 3, 3, 3, 3, 6, 9, 9]));

// 9136701323977808
const removeDuplicats2 = (arr) => {
  let length = 0;

  let i = 0;
  while (i < arr.length) {
    if (arr[length - 1] != arr[i]) {
      arr[length] = arr[i];
      length++;
    }
    i++;
  }
  console.log(arr);
  return length;
};

// console.log(removeDuplicats2([2, 3, 3, 3, 3, 6, 9, 9]));

const rm = (arr) => {
  let i = 1;
  let j = 0;

  while (j < arr.length) {
    if (arr[j] == arr[i]) {
      arr.splice(j, 1);
      i--;
      j--;
    } else {
      i++;
      j++;
    }
  }
  return arr;
};

// console.log(rm([2, 2, 2, 11, 11, 11, 11]));

//------------------------------------------------------------------------------------------------------------------
//Given an unsorted array of numbers and a target ‘key’,
// remove all instances of ‘key’ in-place
//and return the new length of the array.

const remKey = (arr, k) => {
  let notk = 0;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] != k) {
      arr[notk] = arr[i];
      notk++;
    }
    i++;
  }
  console.log(arr);
  return notk;
};

// console.log(remKey([3, 11, 2, 2, 1], 2));
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//Given a sorted array,
// create a new array containing squares of all the number
// of the input array in the sorted order.

const sqrArr = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  let resPointer = arr.length - 1;
  const res = [];
  while (low <= high) {
    let l = arr[low] * arr[low];
    let h = arr[high] * arr[high];
    if (l >= h) {
      res[resPointer] = l;

      low++;
    }
    if (l < h) {
      res[resPointer] = h;
      high--;
    }
    resPointer--;
  }
  return res;
};
// console.log(sqrArr([-3, -1, 0, 1, 2]));
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//brute (failed)
//o(n^3)
const searchTriplets2 = (arr) => {
  triplets = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k += 2) {
        console.log(k);
        if (arr[i] + arr[j] + arr[k] == 0)
          triplets.push([arr[i], arr[j], arr[k]]);
      }
    }
  }

  return triplets;
};

const twoSum = (arr, low, high, target, triplets) => {
  while (low < high) {
    if (arr[low] + arr[high] == target) {
      triplets.push([arr[low], arr[high], -target]);
      low++;
      high--;
    }
    if (arr[low] + arr[high] > target) {
      high--;
    }
    if (arr[low] + arr[high] < target) {
      low++;
    }
  }
};
const searchTriplets = (arr) => {
  triplets = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i != 0 && arr[i - 1] == arr[i]) {
      continue;
    }
    twoSum(arr, i + 1, arr.length - 1, -arr[i], triplets);
  }
  return triplets;
};

// console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//Given an array of unsorted numbers and a target number,
// find a triplet in the array whose sum is as close to the target number as possible,
//return the sum of the triplet. If there are more than one such triplet,
// return the sum of the triplet with the smallest sum.
const hreeSumClosest = (arr, target) => {
  let tSum = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let low = i + 1;
    let high = arr.length - 1;
    while (low < high) {
      let currentSum = arr[low] + arr[high] + arr[i];
      let op = currentSum >= target || currentSum < target;
      if (currentSum > tSum && op) {
        tSum = currentSum;
        low++;
        high--;
      } else {
        low++;
        high--;
      }
      console.log([arr[low], arr[i], arr[high]], tSum);
    }

    //     [-4,-1,1,2]
    // -4+-1+2=> -3
    // -4+1+2=>-1
    // -4+-1+1=> -4
    // -----------
    // -1+1+2=> 2
  }
};

console.log(hreeSumClosest([-2, 0, 1, 2], 2));
