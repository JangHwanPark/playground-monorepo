import {graph} from './constant.js';

console.log(graph);

const visited = new Set();
const dfs = (node) => {
  visited.add(node);
  console.log("\n================================")
  console.log(`방문: ${JSON.stringify(visited)} \nvisited: [${JSON.stringify([...visited])}]`);

  for (const next of graph[node]) {
    console.log("\n인접노드 순회")
    console.log(`${node} -> ${next}확인중...`);
    console.log(`방문여부: ${visited.has(next)}\n`);

    // 방문 안했으면 재귀 실행
    if (!visited.has(next)) {
      console.log(`${node} 미방문 -> 재귀 진입`);
      dfs(next, visited);
    }
  }

  console.log(`${node} 처리 완료 -> 백트래킹`)
}

console.log("\n========== DFS 시작 ==========");
dfs(1);
console.log("========== DFS 종료 ==========\n");
console.log(`최종 방문 순서: ${JSON.stringify([...visited])}`);