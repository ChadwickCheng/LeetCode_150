// 删除属性
delete person.age;
console.log(person.age); // 输出 undefined

// 检查属性是否存在：
console.log('name' in person); // 输出 true
console.log('age' in person); // 输出 false

// 遍历对象的属性：
for (let key in person) {
  console.log(key, person[key]);
}

// 因为 JavaScript 的对象是基于哈希表实现的，哈希表的这些基本操作的时间复杂度都是 O(1)。但请注意，这是在最佳情况下的时间复杂度，如果发生哈希冲突，这些操作的时间复杂度可能会变为 O(n)。