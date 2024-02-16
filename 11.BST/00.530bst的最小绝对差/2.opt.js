var getMinimumDifference = function(root) {
  let prev = null;
  let minDiff = Infinity;

  function inorder(node) {
      if (node === null) {
          return;
      }
      inorder(node.left);
      if (prev !== null) {
          minDiff = Math.min(minDiff, node.val - prev);
      }
      prev = node.val;
      inorder(node.right);
  }

  inorder(root);
  return minDiff;
};

/*
二叉搜索树的一个重要性质是，它的中序遍历结果是一个递增序列。因此，我们可以通过中序遍历二叉搜索树，然后计算相邻两个节点值的差值，找出最小的差值。

时间复杂度是 O(N)，空间复杂度是 O(H)，其中 N 是二叉搜索树中的节点数量，H 是二叉搜索树的高度。
*/