const n = 6;
const arr = [5, 2, 6, 1, 3, 8];

function mergeSort(arr, low, high) {
  // 원소의 개수가 2개 이상인 경우에만 진행
  if (low < high) {
    // 가운데 원소의 위치
    let mid = Math.floor((low + high) / 2);
    // 왼쪽 부분에 대해 병합정렬 진행
    mergeSort(arr, low, mid);
    // 우측 부분에 대해 병합정렬 진행
    mergeSort(arr, mid + 1, high);
    // 정렬된 두 리스트를 하나로 병합
    merge(arr, low, mid, high);
  }
}

const mergedArr = [];
function merge(arr, low, mid, high) {
  let i = low;
  let j = mid + 1
  let k = low;

  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      mergedArr[k] = arr[i];
      k +=1;
      i += 1;
    } else {
      mergedArr[k] = arr[j];
      k += 1;
      j += 1;
    }
  }

  while (i <= mid) {
    mergedArr[k] = arr[i];
    k += 1;
    i += 1;
  }

  while (j <= high) {
    mergedArr[k] = arr[j];
    k += 1;
    j += 1;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = mergedArr[i];
  }

  return arr;
}

const high = n - 1;
const low = 0;
mergeSort(arr, low, high);
console.log(arr)