function FnNode() {
  this.next = null;
  this.value = null;
  this.prev = null;
}

class ClassNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const ObjectNode = {
  value: null,
  next: null,
  prev: null,
};