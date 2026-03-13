const graph = [
  [1, 2],
  [0, 3, 4],
  [0, 5],
  [1],
  [1],
  [2]
];

const start = 0;
const visited = Array(graph.length).fill(false);
const queue = [start];
console.log("초기 상태");
console.log(start, visited, queue);

console.log("\n초기값 방문처리")
visited [start] = true;
console.log("visited", visited);

console.log("\nBFS 시작")
while(queue.length > 0) {
  const node = queue.shift();
  console.log("현재 방문 노드:", node);
  console.log("현재 큐 상태:", queue);

  for(const next of graph[node]) {
    console.log(`${node} -> ${next} 확인중`);

    if (!visited[next]) {
      visited[next] = true;
      console.log(`큐에 추가: ${next}`)
      queue.push(next);
    }
  }
  console.log("BFS 끝\n")
}
console.log(visited, queue)