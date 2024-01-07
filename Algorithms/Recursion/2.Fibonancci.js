const fib = (num, arr = [0, 1]) => {
  if (arr.length == num) {
  } else {
    console.log("r");
    let res = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(res);
    fib(num, arr);
  }
  return arr;
};

console.log(fib(3));
