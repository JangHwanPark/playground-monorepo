const commands = [
    'push_back 1', 'push_front 2',
    'push_front 3', 'pop_front',
    'front', 'pop_back',
    'back', 'size',
    'empty', 'pop_back',
    'push_front 3', 'empty',
    'back'
]

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.cnt = 0;
        this.head = null;
        this.tail = null;
    }

    push_front(val) {
        let newNode = new Node(val);
        if (this.cnt === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.cnt++;
    }

    push_back(val) {
        let newNode = new Node(val);
        if (this.cnt === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.cnt++;
    }

    pop_front() {
        if (this.empty()) throw new Error('[pop_front] empty deque');

        let temp = this.head;
        if (this.cnt === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.cnt--;
        return temp.val;
    }

    pop_back() {
        if (this.empty()) throw new Error('[pop_back] empty deque');

        let temp = this.tail;
        if (this.cnt === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
        }

        this.cnt--;
        return temp.val;
    }

    front() {
        if (this.empty()) throw new Error('[front] empty deque');
        return this.head.val;
    }

    back() {
        if (this.empty()) throw new Error('[back] empty deque');
        return this.tail.val;
    }

    empty() {
        const isEmpty = this.cnt === 0;
        return isEmpty ? 1 : 0;
    }

    size() {
        return this.cnt;
    }
}

const deque = new Deque();

for (let cmd of commands) {
    const [command, value] = cmd.split(' ');

    switch (command) {
        case "front":
            console.log(deque.front());
            break;
        case "back":
            console.log(deque.back());
            break;
        case "push_front":
            deque.push_front(value);
            break;
        case "push_back":
            deque.push_back(value);
            break;
        case "pop_front":
            console.log(deque.pop_front());
            break;
        case "pop_back":
            console.log(deque.pop_back());
            break;
        case "size":
            console.log(deque.size());
            break;
        case "empty":
            console.log(deque.empty());
            break;
        default:
            break;
    }
}

