const n = 6;
const arr = [5, 2, 6, 1, 3, 8];
console.log(arr)
// 5 3 6 4 7 8 9

function heapify(arr, n, i) {
  let lg = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[lg]) {
    lg = left;
  }

  if (right < n && arr[right] > arr[lg]) {
    lg = right;
  }

  if (lg !== i) {
    [arr[lg], arr[i]] = [arr[i], arr[lg]];
    heapify(arr, n, lg);
  }
}

function heapSort(arr, n) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}

heapSort(arr, n);
console.log(arr.join(' '));