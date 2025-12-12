class node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

const node1 = new node('name1');
const node2 = new node('name2');
console.log(node1);
console.log(node2);

node1.next = node2;
console.log(node1);
console.log(node2);
console.log(node1.next);
console.log(node1.next.name);