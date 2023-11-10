const prime = (n) => {
  function helper(n, d) {
    if (d == 1) return true;
    if (n % d == 0) {
      return false;
    } else {
      return helper(n, d - 1);
    }
  }

  return helper(n, n - 1);
};

console.log(prime(12));

const p = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
};

console.log(p(2));
