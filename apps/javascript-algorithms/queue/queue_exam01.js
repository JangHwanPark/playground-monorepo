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
    if (this.empty()) return null;
    return this.items[0];
  }
}

const n = 12;
const commands = ['push 2', 'push 1', 'front', 'size', 'empty', 'pop', 'pop', 'size', 'empty', 'push 3', 'push 4', 'front'];
const q = new Queue();

for (let i = 0; i < n; i++) {
  const [command, value] = commands[i].split(' ');
  switch (command) {
    case 'push':
      q.push(value);
      break;
    case 'pop':
      console.log(q.front());
      q.pop();
      break;
    case 'size':
      console.log(q.size());
      break;
    case 'empty':
      const isEmpty = q.empty();
      console.log(isEmpty ? 1 : 0);
      break;
    case 'front':
      console.log(q.front());
      break;
    default:
      break;
  }
}

