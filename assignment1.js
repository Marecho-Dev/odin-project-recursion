// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
// Now write another function fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).
//Assignment 1
//Fibonacci Sequence using iteration
function fibs(x) {
  if (x === 0) return [0];
  if (x === 1) return [0, 1];
  fibArr = [0, 1];
  for (let i = 2; i < x; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }
  return fibArr;
}

console.log(fibs(8));

//Fibonacci Sequence using recursion

const fibsRec = (n) => {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];
  const a = fibsRec(n - 1);
  a.push(a[n - 1] + a[n - 2]);
  return a;
};

console.log(fibsRec(8));
