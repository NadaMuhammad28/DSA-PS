const isPrime = (n, d) => {
  if (d == 1) return true;
  if (n < 2) return false;

  if (n % d == 0) return false;
  else return isPrime(n, d - 1);
};
const extractPrimeNumbers = () => {
  for (let i = 1; i < 100; i++) {
    if (isPrime(i, i - 1)) console.log(i);
  }
};

extractPrimeNumbers();
