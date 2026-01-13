function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let count = 0;
  while (left <= right) {
    count++;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return count;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return count;
}

/*
Case 1.
arr = [1, 3, 9, 12, 17, 21, 24, 28, 32], target = 20

Case 2.
arr = [-45, -38, -32, -30, -29, -27, -20], target = -26
*/

// Case 1.
const arr1 = [1, 3, 9, 12, 17, 21, 24, 28, 32];
const target1 = 20;

// Case 2.
const arr2 = [-45, -38, -32, -30, -29, -27, -20];
const target2 = -26;

const fn1 = binarySearch(arr1, target1);
const fn2 = binarySearch(arr2, target2);
console.log(fn1, fn2);
