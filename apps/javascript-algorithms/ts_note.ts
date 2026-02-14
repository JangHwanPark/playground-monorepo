let cnt = 0;

function fibo(n: number): number {
  console.log(n, cnt++);
  if (n <= 2) return n;
  return fibo(n - 1) + fibo(n - 2);
}

const fiboRes = fibo(7);
console.log(fiboRes);

// fibo(5)
// ├─ fibo(4)
// │  ├─ fibo(3)
// │  │  ├─ fibo(2)
// │  │  │  ├─ fibo(1)
// │  │  │  └─ fibo(0)
// │  │  └─ fibo(1)
// │  └─ fibo(2)
// │     ├─ fibo(1)
// │     └─ fibo(0)
// └─ fibo(3)
//    ├─ fibo(2)
//    │  ├─ fibo(1)
//    │  └─ fibo(0)
//    └─ fibo(1)
console.log("memoization")
const memo: number[] = new Array(100).fill(-1);
function memoizationFibo(n: number): number {
  console.log(n, memo[n]);
  if (memo[n] != -1) return memo[n];
  if (n <= 2) memo[n] = 1;
  else memo[n] = memoizationFibo(n - 1) + memoizationFibo(n - 2);
  return memo[n];
}

const memoRes = memoizationFibo(7);
console.log(memoRes);