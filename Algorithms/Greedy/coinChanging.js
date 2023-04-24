const coinChanging = (coinTypes, amount) => {
  coinTypes.sort((a, b) => a - b);
  let remaining = amount;
  const res = [];
  for (let i = coinTypes.length - 1; i >= 0; i--) {
    while (remaining >= coinTypes[i]) {
      res.push(coinTypes[i]);
      remaining -= coinTypes[i];
    }
  }
  return res;
};

console.log(coinChanging([25, 10, 5, 1], 36));
//t.c --> 0(n) + o(nlog n)-- > o(nlogn)

//s.c --> o(n)
