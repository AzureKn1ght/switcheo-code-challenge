// Provide 3 unique implementations of the following function.
// **Input**: `n` - any integer
// **Output**: summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`
// ASSUMPTION: input will always produce result lesser than Number.MAX_SAFE_INTEGER
// ASSUMPTION: n > 0

// METHOD A: Gauss summation
var sum_to_n_a = function (n) {
  return (n * (n + 1)) / 2;
};

// METHOD B: Using iteration
var sum_to_n_b = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
};

// METHOD C: Using recursion
var sum_to_n_c = function (n) {
  if (n === 1) return n;
  return n + sum_to_n_c(n - 1);
};

// Testing function
var main = function () {
  const testCases = [1, 2, 500, 2000];
  for (const n of testCases) {
    console.log(`\nsum_to_n(${n})`);
    console.log("A: ", sum_to_n_a(n));
    console.log("B: ", sum_to_n_b(n));
    console.log("C: ", sum_to_n_c(n));
  }
};

main();
