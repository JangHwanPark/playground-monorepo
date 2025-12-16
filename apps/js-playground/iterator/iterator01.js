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

    // 리스트가 빈경우
    // this.head === null과 동일
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
    // 리스트가 비었으면
    // this.head === null과 동일
    if (this.begin() === this.end()) {
      this.push_front(data);
    } else {
      const newNode = new Node(data);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // node 앞에 새로운 data 끼워넣기 (iterator 역할)
  insert(node, data) {
    // 유효하지 않은 노드
    if (!node) return;

    if (node === this.end()) {
      this.push_back(data);
    } else if (node === this.begin()) {
      this.push_front(data);
    } else {
      const newNode = new Node(data);
      newNode.prev = node.prev;
      newNode.next = node;
      node.prev.next = newNode;
      node.prev = newNode;
    }
  }

  erase(node) {
    if (!node) return null;
    const nextNode = node.next;

    if (node === this.begin()) {
      const temp = this.head;
      temp.next.prev = null;
      this.head = temp.next;
      temp.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
    }

    // 삭제된 노드의 다음 노드 반환
    // iterator 갱신용
    return nextNode;
  }

  // 반복자(Iterator) 인터페이스
  begin() {
    return this.head;
  }

  // 마지막 요소가 아니라
  // 마지막의 다음(경계)
  end() {
    // return this.tail;
    return null;
  }
}

const list = new LinkedList();
list.push_back('a');
list.push_back('b');
list.push_back('c');

console.log("\n====== iterator =====")
let it = list.begin();

// 요소 값 출력
console.log(it.data);

// 한칸 뒤로 이동해서 출력
it = it.next;
console.log(it.data);

// 한칸 앞으로 이동해서 출력
it = it.prev;
console.log(it.data);

// 요소 a 제거
it = list.erase(it);
console.log(it.data);

// 요소 data 추가
list.insert(it, 'data');
console.log(it.data);

it = list.begin();
console.log("\n====== while loop ======")
while (it !== list.end()) {
  console.log(it.data);
  it = it.next;
}
