const n = 6;
const arr = [ 5, 2, 6, 1, 3, 8 ];

export const maxVal = Math.max(...arr);
export const digitCnt = Math.floor(Math.log10(maxVal)) + 1;

export function radixSort(arr, k) {
  for (let pos = 0; pos < k; pos++) {
    const bucket = Array.from({length: 10}, () => []);
    for (let i = 0; i < n; i++) {
      const digit = Math.floor(arr[i] / Math.pow(10, pos)) % 10;
      bucket[digit].push(arr[i]);
    }

    const temp = [];
    for (let i = 0; i < bucket.length; i++) {
      for (let j = 0; j < bucket[i].length; j++) {
        temp.push(bucket[i][j]);
      }
    }

    arr = temp;
  }

  return arr;
}

const res = radixSort(arr, digitCnt);
console.log(res)