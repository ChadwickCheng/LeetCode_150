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