const n = 6;
const arr = [ 5, 2, 6, 1, 3, 8 ];

for (let i = 0; i < n - 1; i++) {
  let minVal = i;
  // 최소값 찾기
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[minVal])  minVal = j;
  }

  let temp = arr[i];
  arr[i] = arr[minVal];
  arr[minVal] = temp;
}

console.log(arr)