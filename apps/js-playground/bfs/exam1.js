const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const n = grid.length;
const m = grid[0].length;
let count = 0;

for (let row = 0; row < n; row++) {
  for (let col = 0; col < m; col++) {
    if (grid[row][col] === "1") {
      count++;
      const queue = [[row, col]];
      grid[row][col] = 0;

      while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (nx >= 0 && ny >= 0 && nx < n && ny < m && grid[nx][ny] === "1") {
            grid[nx][ny] = 0;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
}

console.log(count);