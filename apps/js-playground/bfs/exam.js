const grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];

const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

const [sx, sy] = [0, 0];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const n = grid.length;
const m = grid[0].length;

const queue = [[sx, sy]];
grid[sx][sy] = 0;

while (queue.length > 0) {
  const [x, y] = queue.shift();
  console.log("x, y", x, y)
  for (let d = 0; d < 4; d++) {
    const nx = x + dx[d];
    const ny = y + dy[d];
    console.log("nx ny",nx, ny)

    if (
      nx >= 0 && nx < n &&
      ny >= 0 && ny < m &&
      grid[nx][ny] === "1"
    ) {
      grid[nx][ny] = 0;
      queue.push([nx, ny]);

    }
  }
  console.log("grid", grid)
}