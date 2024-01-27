// for...of 循环用于遍历可迭代对象（如数组、字符串、Set、Map 等）的元素值。例如：
let array = [1, 2, 3];
for(let value of array) {
  console.log(value); // 输出 1, 2, 3
}

// for...in 循环用于遍历对象的可枚举属性（包括自身的和继承的）。例如：
let obj = {a: 1, b: 2};
for(let key in obj) {
  console.log(key); // 输出 'a', 'b'
}

// 注意，for...in 在遍历数组时，返回的是数组的索引，而不是元素值。而且 for...in 不仅会遍历数组的元素，还会遍历数组的所有可枚举属性，包括原型链上的。所以在遍历数组时，通常推荐使用 for...of 或其他数组方法（如 forEach、map 等）。