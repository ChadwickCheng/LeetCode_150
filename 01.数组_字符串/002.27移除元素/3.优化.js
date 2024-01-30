/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  let n = nums.length;
  while(i<n){
    if(nums[i]===val){
      nums[i] = nums[n-1];
      n--;
      nums.pop();
    }else{
      i++;
    }
  }
  return n;
};

const arr = [0,1,2,2,3,0,4,2];
val=2;
let n = removeElement(arr,val)
console.log('n',n);
console.log('arr',arr);

// 时间复杂度 O(n)
// 空间复杂度 O(1)
/*
更优雅的解决方案是使用两个指针，一个从前向后遍历数组，一个从后向前遍历数组，当找到等于 val 的元素时，将其与最后一个元素交换，然后删除最后一个元素。这个解决方案的时间复杂度是 O(n)。
*/