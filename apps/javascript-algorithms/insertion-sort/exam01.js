const n = 6;
const arr = [5, 2, 6, 1, 3, 8];

export function insertionSort(arr) {
  for (let i = 1; i < n; i++) {
    let temp = i - 1;
    let key = arr[i];

    while (temp >= 0 && arr[temp] > key) {
      arr[temp + 1] = arr[temp];
      temp--;
    }
    arr[temp + 1] = key;
  }

  return arr;
}

const result = insertionSort(arr);
console.log(result);