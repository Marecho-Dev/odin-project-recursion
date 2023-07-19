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
