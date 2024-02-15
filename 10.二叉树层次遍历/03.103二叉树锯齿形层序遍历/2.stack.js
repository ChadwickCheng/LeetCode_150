var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let res = [];
  let currentLevel = [root];
  let nextLevel = [];
  let leftToRight = true;
  while (currentLevel.length > 0) {
      let level = [];
      while (currentLevel.length > 0) {
          let node = currentLevel.pop();
          level.push(node.val);
          if (leftToRight) {
              if (node.left) nextLevel.push(node.left);
              if (node.right) nextLevel.push(node.right);
          } else {
              if (node.right) nextLevel.push(node.right);
              if (node.left) nextLevel.push(node.left);
          }
      }
      res.push(level);
      currentLevel = nextLevel;
      nextLevel = [];
      leftToRight = !leftToRight;
  }
  return res;
};