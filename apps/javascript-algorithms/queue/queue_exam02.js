const n = 7;
const k = 3;

class Queue {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  empty() {
    return this.items.length === 0;
  }

  front() {
    return this.items[0];
  }
}

const q = new Queue();
const res = [];
for (let i = 1; i <= n; i++) q.push(i);

while (!q.empty()) {
  for (let i = 1; i < k; i++) q.push(q.pop());
  res.push(q.pop());
}

console.log(res.join(' '))

