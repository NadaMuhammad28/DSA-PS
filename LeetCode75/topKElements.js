var topKFrequent = function (nums, k) {
  const m = new Map();
  for (i of nums) {
    m.has(i) ? m.set(i, m.get(i) + 1) : m.set(i, 1);
  }

  let heap = [];
  heap.length = nums.length;

  for (let j of m) {
    if (heap[j[1]] == undefined) {
      heap[j[1]] = [j[0]];
    } else {
      heap[j[1]].push(j[0]);
    }
  }

  let output = [];
  for (let p = heap.length; p > 0; p--) {
    if (output.length == k) break;
    if (heap[p]) {
      output = [...output, ...heap[p]];
    }
  }

  return output;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

//bucket sort
console.log(Math.max(1, 4, 5));
