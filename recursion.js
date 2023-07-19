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
