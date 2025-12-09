// push_back A: A를 동적 배열 맨 뒤에 넣는 연산
// pop_back: 맨 뒤에 있는 값를 하나 제거
// size: 동적 배열에 들어있는 값의 개수를 출력
// get k: k번째 값을 출력

class ArrayList {
  constructor() {
    this.data = [];
  }

  push_back(value) {
    this.data.push(value);
  }

  pop_back() {
    return this.data.pop();
  }

  size() {
    return this.data.length;
  }

  get(k) {
    return this.data[k];
  }
}

const n = 9;
const commands = ['push_back 10', 'push_back 20', 'get 1', 'get 2', 'size', 'pop_back', 'size', 'get 1', 'size'];
const arrList = [];

for (let i = 0; i < n; i++) {
  const [command, value] = commands[i].split(' ');
  if (command === 'push_back') arrList.push(value);
  else if (command === 'pop_back') arrList.pop();
  else if (command === 'get') console.log(arrList[value - 1]);
  else console.log(arrList.length);
}