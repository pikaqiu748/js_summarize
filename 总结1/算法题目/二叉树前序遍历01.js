var preTraverse = function (root) {
  if (!root) return [];
  let res = [];
  preOrder(root, res)
  return res;
}

function preOrder (node, res) {
  if (!node) return;
  res.push(node.val)
  preOrder(node.left, res);
  preOrder(node.right, res);
}