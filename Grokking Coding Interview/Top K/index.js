// Q1:Given an unsorted array of numbers, find the ‘K’ largest numbers in it.
//appproach 1:
//t-c o(nlogn)
const kLargestSort = (arr, k) => {
  arr.sort((a, b) => a - b);
  return arr.splice(arr.length - k);
};

const kLargest = (arr, k) => {
  const m = new Map();
  for (let i = 0; i < arr.length; i++) {
    m.has(arr[i]) ? m.set(arr[i], m.get(arr[i] + 1)) : m.set(arr[i], 1);
  }
};
console.log(kLargest([3, 1, 5, 12, 2, 11], 3));
