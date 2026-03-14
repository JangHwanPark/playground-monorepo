import {gridGraph} from './constant.js';

console.log(gridGraph)

const row = gridGraph.length;
const col = gridGraph[0].length;
const visited = Array.from({length: row}, () => Array(col).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const dirName = ["상", "하", "좌", "우"];

function printVisited() {
  console.log(
    visited
      .map(row => row.map(v => (v ? 1 : 0)).join(' '))
      .join('\n')
  );
}

function dfs(x, y, depth = 0) {
  const indent = '  '.repeat(depth);

  console.log(`${indent}dfs(${x}, ${y}) 호출`);
  visited[x][y] = true;

  console.log(`${indent}현재 위치 방문 처리: (${x}, ${y})`);
  console.log(`${indent}visited 상태`);
  printVisited();

  console.log(`${indent}4방향 탐색 시작`);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    console.log(`${indent}→ ${dirName[i]} 확인: (${nx}, ${ny})`);

    if (nx < 0 || nx >= row || ny < 0 || ny >= col) {
      console.log(`${indent}  범위 초과 -> 스킵`);
      continue;
    }

    if (visited[nx][ny]) {
      console.log(`${indent}  이미 방문 -> 스킵`);
      continue;
    }

    if (gridGraph[nx][ny] === 0) {
      console.log(`${indent}  벽 또는 이동 불가 -> 스킵`);
      continue;
    }

    console.log(`${indent}  이동 가능 -> dfs(${nx}, ${ny}) 재귀 호출`);
    dfs(nx, ny, depth + 1);
    console.log(`${indent}  dfs(${nx}, ${ny}) 종료 후 (${x}, ${y})로 복귀`);
  }

  console.log(`${indent}dfs(${x}, ${y}) 종료`);
}

console.log('========== Grid DFS 시작 ==========');
dfs(0, 0);
console.log('========== Grid DFS 종료 ==========');

// DFS 시작점 정하기 - dfs(0,0)
// 전체 순회하면서 시작점 정하기
// for (let x = 0; x < row; x++) {
//   for (let y = 0; y < col; y++) {
//     if (!visited[x][y] && grid[x][y] === 1) {
//       dfs(x, y);
//     }
//   }
// }