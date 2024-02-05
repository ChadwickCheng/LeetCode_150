// 创建 Set：
let mySet = new Set();

// 添加元素：
mySet.add(1); // Set { 1 }
mySet.add(2); // Set { 1, 2 }
mySet.add(2); // 这不会做任何事情，因为 2 已经在 Set 中了

// 检查元素：
mySet.has(1); // true
mySet.has(3); // false

// 删除元素：
mySet.delete(1); // 删除元素 1，返回 true。如果元素不存在，则返回 false

// 获取 Set 的大小：
mySet.size; // 返回 Set 的元素数量

// 遍历 Set：
for (let item of mySet) console.log(item);
// 或者使用 forEach 方法
mySet.forEach(function(value) {
  console.log(value);
});

// 清空 Set：
mySet.clear();