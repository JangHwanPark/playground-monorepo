const n = 6;
const arr = [5, 2, 6, 1, 3, 8];
let cnt = 0;
let low = 0, high = n - 1;

function swap(arr, idxI, idxJ) {
  const temp = arr[idxI];
  arr[idxI] = arr[idxJ];
  arr[idxJ] = temp;
}

function partition(arr, low, high) {
  console.log("partition start", {low, high, arr: [...arr]});
  let pivot = arr[high];
  console.log("pivot", {
    pivot,
    pivotIndex: Math.floor((low + high) / 2),
  });
  let i = low - 1;

  for (let j = low; j < high; j++) {
    console.log(arr[j] < pivot)
    if (arr[j] < pivot) {
      console.log("swap condition met", {j, i: i + 1, arrJ: arr[j],});
      i++;
      console.log("before swap", [...arr]);
      swap(arr, i, j);
      console.log("after swap", [...arr]);
    }
  }

  console.log("pivot swap", {targetIndex: i + 1, pivotValue: arr[high],
  });
  swap(arr, i + 1, high);
  console.log("partition end", {pivotIndex: i + 1, arr: [...arr],});
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pos = partition(arr, low, high);
    quickSort(arr, low, pos - 1);
    quickSort(arr, pos + 1, high);
  }
}

quickSort(arr, low, high);
console.log(arr)