class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    const popItem = this.items.pop();
    console.log(popItem);
    return popItem;
  }

  empty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  top() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
const n = 6;
const commands = ['push 3', 'size', 'empty', 'pop', 'push 3', 'size'];

for (let i = 0; i < n; i++) {
  const [command, value] = commands[i].split(' ');

  switch (command) {
    case 'push':
      stack.push(value);
      break;
    case 'pop':
      stack.pop();
      break;
    case 'size':
      console.log(stack.size());
      break;
    case 'empty':
      console.log(stack.empty() ? 1 : 0);
      break;
    case 'top':
      console.log(stack.top());
      break;
    default:
      break;
  }
}