const factorial = (n) => {
  if (n == 0) return 1;
  return n * factorial(n - 1);
};

const Ifactorial = (n) => {
  let res = 1;

  while (n > 0) {
    res *= n;
    n--;
  }
  return res;
};
console.log(Ifactorial(0));
