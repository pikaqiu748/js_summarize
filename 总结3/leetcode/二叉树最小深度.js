var minDepth = function (root) {
  if (!root) return 0;
  // 左右子树为Null，返回1
  if (!root.left && !root.right) return 1;
  let min_dep = Infinity;

  if (root.left) {
    min_dep = Math.min(minDepth(root.left), min_dep)
  }

  if (root.right) {
    min_dep = Math.min(minDepth(root.right), min_dep)
  }
  return min_dep + 1;
}