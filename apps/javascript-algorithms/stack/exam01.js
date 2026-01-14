const bracketStr = "()()()()(()()())()";

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  empty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
let isBalanced = true;

for (let i = 0; i < bracketStr.length; i++) {
  const bracket = bracketStr[i];

  if (bracket === '(') stack.push(bracket);
  else {
    if ((stack.empty())) {
      isBalanced = false;
      break;
    }

    stack.pop();
  }
}

if (!stack.empty()) {
  isBalanced = false;
}

console.log(isBalanced ? 'Yes' : 'No');