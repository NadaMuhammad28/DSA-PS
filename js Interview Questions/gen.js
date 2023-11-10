function debounce(func, delay) {
  let timeoutId;
  return function() {
    const context = this;
    console.log(context);
    const args = arguments;
    console.log(args);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function myFunction() {
  console.log('My function was called!');
}

const debouncedFunction = debounce(myFunction, 500);

// Call the debounced function
debouncedFunction();

// Cancel the debounced function before it has a chance to be executed
clearTimeout(debouncedFunction);