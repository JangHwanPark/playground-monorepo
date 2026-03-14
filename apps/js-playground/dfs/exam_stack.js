import {graph, graph1} from './constant.js';

console.log(graph1);
console.log("\n========== DFS 시작 ==========")

const start = 1;
const visited = new Set();
const stack = [start];
console.log(`시작 노드: ${start}`)
console.log(`스택 push | stack: [${stack}]`);

while (stack.length > 0) {
  console.log("\n========== 스택이 빌 때까지 시작 ==========");
  const node = stack.pop();
  console.log(`스택에서 꺼내기(LIFO) - 꺼낸 노드: ${node}`);

  console.log(`\n[${node}]번 노드 검사 중...`);
  if (visited.has(node)) {
    console.log(`[ 중복 노드 발견 ]`);
    console.log(`현재 노드: ${node}`);
    console.log(`방문 기록: { ${[...visited].join(', ')} }`);
    console.log(`결과: 이미 방문했으므로 로직을 건너뜁니다 (Continue).`);
    continue;
  }

  console.log("\n방문처리 (스택에 넣기)");
  visited.add(node);
  console.log(`방문처리 완료 | visited: [${JSON.stringify([...visited])}]`);

  console.log("\n인접 노드 스택에 넣기");
  for (const next of graph1[node]) {
    if (!visited.has(next)) {
      stack.push(next);
      console.log(`스택에 ${next} push | stack: [${stack}]`);
    }
  }
  console.log(`현재 방문기록: ${[...visited]}`);
  console.log(`========== 루프 n회차 종료 ==========`)
}

console.log(`최종 방문순서: ${[...visited]}`);
console.log("\n========== DFS 완료 ==========")