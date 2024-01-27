// slice(start, end) 方法返回一个新的数组，包含从 start 到 end（不包括 end）的 arrayObject 的深拷贝。原始数组不会被改变。
let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 3);
console.log(sliced); // 输出：[2, 3]
console.log(arr); // 输出：[1, 2, 3, 4, 5]

// splice(start, deleteCount, item1, ..., itemX) 方法在原数组上直接进行修改，它会删除从 start 开始的 deleteCount 个元素，并从该位置开始插入新的元素 item1, ..., itemX。这个方法返回由被删除的元素组成的数组。
let arr1 = [1, 2, 3, 4, 5];
let spliced = arr.splice(1, 2, 'a', 'b', 'c');
console.log(spliced); // 输出：[2, 3]
console.log(arr); // 输出：[1, 'a', 'b', 'c', 4, 5]