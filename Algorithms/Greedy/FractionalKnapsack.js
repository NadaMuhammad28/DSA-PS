const FractionalKnapsack = (arr, c) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].ratio = arr[i].value / arr[i].weight;
  }
  arr.sort((a, b) => b.ratio - a.ratio);

  let remaining = c;
  let val = 0;
  let j = 0;
  while (remaining > 0) {
    let amount = Math.min(arr[j].weight, remaining);
    console.log(amount);
    remaining -= amount;
    val += arr[j].ratio * amount;
    j++;
  }
  return val;
};

const items = [
  { weight: 20, value: 100 },
  { weight: 10, value: 60 },
  { weight: 30, value: 120 },
];
const capacity = 50;
const expected = 240;

console.log(FractionalKnapsack(items, capacity));
