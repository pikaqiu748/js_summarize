// 递归解法
var preorderTraversal = function (root) {
  if (!root) return []
  const res = []
  preorder(root, res)
  return res
}

var preorder = function (node, res) {
  if (!node) return
  res.push(node.val)
  preorder(node.left, res)
  preorder(node.right, res)
}
