// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
// Tips:
// Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
// It may be helpful to check out the background videos again if you don’t quite understand what should be going on.
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = arr.length / 2;
  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid, arr.length))
  );
}

function merge(arrA, arrB) {
  let i = 0;
  let j = 0;
  const c = [];
  while (i !== arrA.length || j !== arrB.length) {
    if (arrA[i] < arrB[j] || arrA[i] === arrB[j]) {
      c.push(arrA[i]);
      i++;
    }
    if (arrB[j] < arrA[i]) {
      c.push(arrB[j]);
      j++;
    }

    if (i == arrA.length) {
      return [...c, ...arrB.slice(j, arrB.length)];
    }
    if (j == arrB.length) {
      return [...c, ...arrA.slice(i, arrA.length)];
    }
  }
}

console.log(mergeSort([1, 3, 2, 6, 5, 4, 7, 8]));
