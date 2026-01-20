const MAX_SIZE = 10000;

class Deque {
    constructor() {  // 빈 덱 하나를 생성합니다.
        this.q = Array(MAX_SIZE).fill(0);
        this.head = 0;
        this.tail = 0;
    }

    pushFront(item) {  // 덱의 맨 앞에 데이터를 추가합니다.
        if (this.full()) throw new Error("Deque is full");

        this.head = (this.head - 1 + MAX_SIZE) % MAX_SIZE;
        this.q[this.head] = item;
    }

    pushBack(item) {  // 덱의 맨 뒤에 데이터를 추가합니다.
        if (this.full()) throw new Error("Deque is full");

        this.q[this.tail] = item;
        this.tail = (this.tail + 1) % MAX_SIZE;
    }

    full() {  // 덱이 가득 차 있으면 true를 반환합니다.
        return (this.tail + 1) % MAX_SIZE === this.head;
    }

    empty() {  // 덱이 비어있으면 true를 반환합니다.
        return this.head === this.tail;
    }

    size() {  // 덱이 들어있는 데이터 수를 반환합니다.
        return (this.tail - this.head + MAX_SIZE) % MAX_SIZE;
    }

    popFront() {  // 덱의 맨 앞에 있는 데이터를 반환하고 제거합니다.
        if (this.empty()) throw new Error("Deque is empty");

        const item = this.q[this.head];
        this.head = (this.head + 1) % MAX_SIZE;
        return item;
    }

    popBack() {  // 덱의 맨 뒤에 있는 데이터를 반환하고 제거합니다.
        if (this.empty()) throw new Error("Deque is empty");

        this.tail = (this.tail - 1 + MAX_SIZE) % MAX_SIZE;
        return this.q[this.tail];
    }

    front() {  // 덱의 맨 앞에 있는 데이터를 제거하지 않고 반환합니다.
        if (this.empty()) throw new Error("Deque is empty");

        return this.q[this.head];
    }

    back() {  // 덱의 맨 뒤에 있는 데이터를 제거하지 않고 반환합니다.
        if (this.empty()) throw new Error("Deque is empty");

        return this.q[(this.tail - 1 + MAX_SIZE) % MAX_SIZE];
    }
}
