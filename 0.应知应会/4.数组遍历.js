// forEach：对数组的每个元素执行一次给定的函数。
array.forEach(function(item, index, array) {
  console.log(item); // 当前元素
  console.log(index); // 当前索引
  console.log(array); // 数组本身
});

// map：创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
let newArray = array.map(function(item, index, array) {
  return item * 2; // 返回新数组，元素为原数组元素的两倍
});

// filter：创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
let newArray1 = array.filter(function(item, index, array) {
  return item > 2; // 返回新数组，元素为原数组元素大于2的元素
});

// reduce：对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
let sum = array.reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue; // 返回数组元素的和
}, 0);

// forof forin