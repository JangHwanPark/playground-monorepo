// === 입력 ===
// 노드: 0 ~ 4
// 간선: 0-1, 0-2, 1-3, 2-4
const graph = [
  [1, 2],    // 0번과 연결된 노드들
  [0, 3],    // 1번과 연결된 노드들
  [0, 4],    // 2번과 연결된 노드들
  [1],       // 3번과 연결된 노드들
  [2]        // 4번과 연결된 노드들
];

// 0번 노드는 1번노드, 2번 노드와 연결되어있음.
console.log("graph[0]:", graph[0]);
// 1번 노드는 0번노드, 3번 노드와 연결되어있음.
console.log("graph[1]:", graph[1]);
console.log("graph[2]:", graph[2]);
console.log("graph[3]:", graph[3]);
console.log("graph[4]:", graph[4], "\n")

const start = 0;
const city = ["서울","부산","대구","광주","대전"];

const visited = new Set([start]);
const queue = [start];
const result = [];
const valueResult = [];
console.log('초기화:',visited, queue, result, valueResult);

while (queue.length > 0) {
  const node = queue.shift();
  console.log("방문 노드:", node);
  console.log("방문한 도시:", city[node]);
  console.log("방문한 노드의 인접 리스트:", graph[node]);

  result.push(node);
  console.log("방문처리:", result);

  valueResult.push(city[node]);
  console.log('방문한 값 저장:', valueResult);

  console.log("\nnode 인접노드 순회")
  for (const next of graph[node]) {
    if (!visited.has(next)) {
      visited.add(next);
      queue.push(next);
      console.log("큐에 추가된 노드(next):", next);
    }
  }
}

console.log('방문순서:', result);