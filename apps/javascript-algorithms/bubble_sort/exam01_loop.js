const n = 6;
const arr = [5, 2, 6, 1, 3, 8];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);