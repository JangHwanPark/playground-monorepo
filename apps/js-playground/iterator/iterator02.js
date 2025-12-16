const n = 5;
const m = 5;
const s = 'codet';
// const s = 'abcde';
const commands = [ 'L', 'P s', 'L', 'R', 'D' ];

// L = prev
// R = next
// D = next erase
// P & = insert(&)
// codet -> codes
// abcde -> bcde

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push_front(data) {
    const newNode = new Node(data);
    if (this.begin() === this.end()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  push_back(data) {
    if (this.begin() === this.end()) {
      this.push_front(data);
    } else {
      const newNode = new Node(data);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  insert(node, data) {
    // 만약 기준노드가 없다면? -> 종료 (return)
    if (!node) return;

    // 만약 기준노드가 end() (null) 이라면?
    if (node === this.end()) {
      this.push_back(data);
    }

    // 만약 기준노드가 begin() (head) 이라면?
    else if (node === this.begin()) {
      this.push_front(data);
    }

    // 중간 삽입
    else {
      const newNode = new Node(data);
      newNode.prev = node.prev;
      newNode.next = node;
      node.prev.next = newNode;
      node.prev = newNode;
    }
  }

  erase(node) {
    // 만약 삭제할노드가 없거나 end()라면
    if (!node) return null;

    // 다음 노드 백업
    const nextNode = node.next;

    // 만약 삭제할노드가 head라면?
    if (node === this.begin()) {
      this.head = nextNode;
      // 만약 새 head가 있다면? -> 앞 연결 끊기
      if (this.head) this.head.prev = null;
      // 없다면 -> 리스트 비어있음
      else this.tail = null;
    }
    // 만약 삭제할노드가 tail이라면?
    else if (node === this.tail) {
      this.tail = node.prev;
      if (this.tail) this.tail.next = null;
      else this.head = null;
    }
    // 중간 삭제
    else {
      node.prev.next = nextNode;
      node.next.prev = node.prev;
    }
    // 메모리 정리
    node.prev = null;
    node.next = null;

    return nextNode;
  }

  begin() {
    return this.head;
  }

  end() {
    return null;
  }
}

const list = new LinkedList();
for (let i = 0; i < n; i++) list.push_back(s[i]);
let it = list.end();

for (let i = 0; i < m; i++) {
  const line = commands[i].split(' ');
  const command = line[0];
  const value = line[1];
  // console.log({command, value});
  // 'L'이 적혀있다면 가리키는 위치 ↑ 를 바로 앞에 있는 빵을 건너뛴 위치로 변경합니다. 만약,이미 빵들의 맨 앞이라면 무시합니다.
  if (command === 'L' && it !== list.begin()) {
    if (it === list.end()) it = list.tail;
    else it = it.prev;
  }

  // 'R'이 적혀있다면 가리키는 위치 ↑ 를 바로 뒤에 있는 빵을 건너뛴 위치로 변경합니다. 만약, 이미 빵들의 맨 뒤라면 무시합니다.
  else if (command === 'R' && it !== list.end()) {
    if (it === list.end()) continue;
    else it = it.next;
  }

  // 'D'가 적혀있다면 가리키는 위치 ↑ 의 바로 뒤에 있는 빵을 제거합니다. 만약, 이미 빵들의 맨 뒤라면 무시합니다.
  else if (command === 'D' && it !== list.end()) {
    if (it === list.end()) continue;
    else it = list.erase(it);
  }

  // 'P &'가 적혀있다면 가리키는 위치 ↑ 에 &라는 문자가 적혀있는 식빵을 추가합니다. 이후 는 추가된 문자 & 바로 뒤가 됩니다.
  else {
    list.insert(it, value);
  }
}

// console.log("\n====== while loop ======")
let current = list.begin();
let res = '';
while (current !== list.end()) {
  res += current.data;
  current = current.next;
}
// console.log('res = codet -> codes')
console.log(res);