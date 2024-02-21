/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let maxPoints = 1;
  for (let i = 0; i < points.length; i++) {
      let slopes = new Map();
      for (let j = i + 1; j < points.length; j++) {
          let dx = points[i][0] - points[j][0];
          let dy = points[i][1] - points[j][1];
          let slope = dy === 0 ? 'Infinity' : dx / dy;
          slopes.set(slope, (slopes.get(slope) || 1) + 1);
      }
      for (let count of slopes.values()) {
          maxPoints = Math.max(maxPoints, count);
      }
  }
  return maxPoints;
};

/*
使用哈希表来解决。我们可以对每个点，计算它与其他所有点的斜率，然后将斜率和点的数量存储在哈希表中。

以下是实现的详细步骤：

1. 初始化最大点数 maxPoints 为 1。
2. 对于每个点 points[i]，初始化一个哈希表 slopes 来存储斜率和点的数量，然后对于每个其他的点 points[j]，计算斜率 slope，然后在 slopes 中增加 slope 的数量。
3. 对于每个斜率，更新 maxPoints 为 slopes[slope] 和 maxPoints 的最大值。
4.返回 maxPoints。
*/