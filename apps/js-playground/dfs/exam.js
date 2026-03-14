const grid = [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
];

const r = grid.length;
const c = grid[0].length;
const v = Array.from({ length: r }, () => Array(c).fill(false));
let cnt = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y) {
  v[x][y] = true;

  // 격자 돌리기
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;

    // 새로운섬 발견
    if (grid[nx][ny] === "0") continue;
    if (v[nx][ny]) continue;
    dfs(nx, ny);
  }
}

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (grid[i][j] === '1' && !v[i][j]) {
      cnt++;
      dfs(i, j);
    }
  }
}
console.log(v);
console.log(cnt);