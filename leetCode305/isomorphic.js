var isIsomorphic = function (s, t) {
  let m = new Map();
  let sp = 0;
  let tp = 0;
  let res = false;
  while (sp < s.length && tp < t.length) {
    if (!m.has(s[sp])) {
      if (!(t.indexOf(t[tp]) != tp)) m.set(s[sp], t[tp]);
    }

    if (m.has(s[sp]) && m.get(s[sp]) === t[tp]) {
      res = true;
    }

    if (!(m.get(s[sp]) === t[tp])) {
      return false;
    }
    sp++;
    tp++;
  }
  console.log(m.values());
  return res;
};
//p,t a,i  p.t  e.l   r.e
// console.log(isIsomorphic("badc", "baba"));

// var canPlaceFlowers = function (flowerbed, n) {
//   if (n === 0) return true;

//   let zeroCount = 0;
//   let zeroOneCount = 0;
//   for (let i = 0; i < flowerbed.length ; i++) {
//    if (flowerbed[i]===0){

//     if(flowerbed[i+1]===0 && flowerbed[i-1]===0)
//    }
//   }

//   return false;
// };

// console.log(canPlaceFlowers([1, 0, 0, , 0, 0, 1], 1));

var pivotIndex = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let lsum = 0;
  let rsum = 0;
  let pivot = -1;
  lsum += nums[low];
  rsum += nums[high];
  while (low <= high) {
    if (rsum === lsum) return low + 1;
    if (lsum < rsum) {
      low++;
      lsum += nums[low];
    }

    if (lsum > rsum) {
      high--;
      rsum += nums[high];
    }
  }
  return pivot;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
