const grid = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

const [sx, sy] = [0, 0];
const n = grid.length;
const m = grid[0].length;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < 4; i++) {
  const nx = sx + dx[i];
  const ny = sy + dy[i];
  console.log(nx, ny)

  if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
    console.log("범위 밖 - 값:", nx, ny);
    continue;
  }

  console.log("범위 안 - 값:", nx, ny);
}