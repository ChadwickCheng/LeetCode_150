var flatten = function(root) {
  if (root === null) {
      return;
  }
  flatten(root.left);
  flatten(root.right);
  let left = root.left;
  let right = root.right;
  root.left = null;
  root.right = left;
  let p = root;
  while (p.right !== null) {
      p = p.right;
  }
  p.right = right;
};
/*
先将左子树和右子树展开，然后将左子树作为右子树，将原来的右子树接到现在右子树的末尾。

这个算法的时间复杂度是O(n)，其中n是二叉树的节点数。因为我们需要遍历每个节点一次。空间复杂度是O(h)，其中h是二叉树的高度。因为我们需要使用递归栈，递归栈的深度等于二叉树的高度。
*/