const memo = Array(100000).fill(0);

function dp(n: number) {
  if (n <= 1) return;
  if (n !== -1) return memo[n];
  memo[n] = dp(n - 1) + dp(n - 2);
  return memo[n];
}