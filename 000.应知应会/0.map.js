// 创建一个新的 Map
let map = new Map();

// 设置键值对
map.set('name', 'John');
map.set(1, 'number one');

// 获取值
console.log(map.get('name')); // 输出 'John'
console.log(map.get(1)); // 输出 'number one'

// 检查键是否存在
console.log(map.has('name')); // 输出 true

// 获取 Map 的大小
console.log(map.size); // 输出 2

// 删除键
map.delete('name');

// 清空 Map
map.clear();

// map.keys()：返回一个新的迭代器对象，它包含 Map 对象中每个元素的键。
for (let key of map.keys()) {
  console.log(key);
}

// map.values()：返回一个新的迭代器对象，它包含 Map 对象中每个元素的值。
for (let value of map.values()) {
  console.log(value);
}

// map.entries()：返回一个新的迭代器对象，它包含 Map 对象中每个元素的键值对数组。
for (let [key, value] of map.entries()) {
  console.log(key, value);
}

// map.forEach()：按插入顺序对 Map 对象中的每个元素执行一次给定的函数。
map.forEach((value, key) => {
  console.log(key, value);
});