class node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push_front(data) {
    // 새 노드의 next 값을 head 로 설정
    const newNode = new node(data);
    newNode.next = this.head;

    // 기존 리스트가 비어있지않다면
    if (this.head !== null) {
      // 이전 head의 prev 값을 바꾸고 head값을 바꿈
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      // 기존 리스트가 비어있다면
      // head, tail을 새로 설정함
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.prev = null;
    this.length++;
  }

  push_back(data) {
    // 새 노드의 prev 값을 tail로 설정
    const newNode = new node(data);
    newNode.prev = this.tail;

    // 기존 리스트가 비어있지않다면
    if (this.tail !== null) {
      // 이전 tail의 next를 바꾸고 tail을 변경함
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // 기존 리스트가 비어있다면
      // head, tail을 새로 설정함
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = null;
    this.length++;
  }

  pop_front() {
    if (this.head === null) return null;
    else if (this.head.next === null) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp.data;
    } else {
      const temp = this.head;
      temp.next.prev = null;
      this.head = temp.next;
      temp.next = null;
      this.length--;
      return temp.data;
    }
  }

  pop_back() {
    if (this.tail === null) return null;
    else if (this.tail.prev === null) {
      const temp = this.tail;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp.data;
    } else {
      const temp = this.tail;
      temp.prev.next = null;
      this.tail = temp.prev;
      temp.prev = null;
      this.length--;
      return temp.data;
    }
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length === 0;
  }

  // 맨 앞에있는 값을 반환
  front() {
    if (this.head === null) return null;
    return this.head.data;
  }

  // 맨 뒤에있는 값을 반환
  back() {
    if (this.tail === null) return null;
    return this.tail.data;
  }
}

const n = 13
const arr = ['push_back 1', 'push_front 2', 'push_front 3', 'pop_front', 'front', 'pop_back', 'back', 'size', 'empty', 'pop_back', 'push_front 3', 'empty', 'back'];
const list = new DoublyLinkedList();

for (let i = 0; i < n; i++) {
  const [command, value] = arr[i].split(' ');
  if (command === 'push_front') list.push_front(value);
  else if (command === 'push_back') list.push_back(value);
  else if (command === 'pop_front') console.log(list.pop_front());
  else if (command === 'pop_back') console.log(list.pop_back());
  else if (command === 'front') console.log(list.front());
  else if (command === 'back') console.log(list.back());
  else if (command === 'size') console.log(list.size());
  else if (command === 'empty') console.log(list.empty() === false ? 0 : 1);
  else console.log('error');
}