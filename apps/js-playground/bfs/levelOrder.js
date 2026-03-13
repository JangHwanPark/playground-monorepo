const tree = {
  "val": 3,
  "left": {"val": 9, "left": null, "right": null},
  "right": {"val": 20, "left": {"val": 15, "left": null, "right": null}, "right": {"val": 7, "left": null, "right": null}}
}

const levelOrderIndex = (root) => {
  let start = 0;
  const result = [];
  const queue = [root];
  console.log(queue)

  while (queue.length > start) {
    const level = queue.length - start;
    const levelResult = [];

    for (let i = 0; i < level; i++) {
      const node = queue[start++];
      levelResult.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(levelResult);
    console.log("result:", result);
  }

  return result;
}

const levelOrderShift = (root) => {
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const level = queue.length;
    const levelResult = [];

    for (let i = 0; i < level; i++) {
      const node = queue.shift();
      levelResult.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(levelResult);
    console.log("result:", result);
  }

  return result;
}

console.log(levelOrderIndex(tree));
console.log(levelOrderShift(tree));