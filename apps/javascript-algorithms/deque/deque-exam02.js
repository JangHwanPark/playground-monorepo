const n = 6;

class Deque {
    constructor(max_size) {
        this.buffer = Array(max_size);
        this.capacity = max_size;
        this.head = 0;
        this.tail = 0;
        this.cnt = 0;
    }

    pop_front() {
        const val = this.buffer[this.head];
        this.head = (this.head + 1) % this.capacity;
        this.cnt--;
        return val;
    }

    push_back(val) {
        this.buffer[this.tail] = val;
        this.tail = (this.tail + 1) % this.capacity;
        this.cnt++;
    }

    front() {
        return this.buffer[this.head];
    }

    size() {
        return this.cnt;
    }
}

const deque = new Deque(n);

for (let i = 0; i < n; i++) {
    deque.push_back(i + 1);
}

while (deque.size() > 1) {
    deque.pop_front();
    const temp = deque.pop_front();
    deque.push_back(temp);
}

console.log(deque.front())
