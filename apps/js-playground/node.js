// 탐색할 그래프
const graph = [
  [1, 2],      // 0
  [0, 3, 4],   // 1
  [0, 5],      // 2
  [1],         // 3
  [1],         // 4
  [2]          // 5
];

// 탐색 시작점
const startNode = 0;

// 1. 방문배열을 false로 초기화한다.
const visited = Array(graph.length).fill(false);

// 2. 시작노드를 큐에 넣는다.
const queue = [startNode];
// queue.push(startNode);

// 3. 시작노드를 visited 처리(true) 한다.
visited[startNode] = true;

// 4. 큐가 빌때까지 반복한다.
while (queue.length > 0) {
  console.log("현재 큐:", queue);
  // 4.1. 현재 노드를 큐에서 꺼낸다. (shift)
  const currentNode = queue.shift();
  console.log("현재 탐색 노드:", currentNode);

  // 4.3 현재 노드와 연결된 노드를 순회(현재 노드의 이웃 노드 탐색)
  for (const next of graph[currentNode]) {
    // 4.3 아직 방문하지 않은 노드인지 확인한다
    if (!visited[next]) {
      console.log("새 노드 발견:", next);
      // 4.4. 방문 처리한다
      visited[next] = true;
      // 4.5. 큐에 다음노드를 넣는다.
      queue.push(next);
      console.log("큐에 추가:", next + "\n");
    }
  }
}