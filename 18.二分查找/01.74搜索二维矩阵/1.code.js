/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let god = [];
  for(let i=0;i<matrix.length;i++){
    let curArr = matrix[i];
    if(curArr[0]===target||curArr[curArr.length-1]===target){
      return true;
    }else if(curArr[0]<target&&curArr[curArr.length-1]>target){
      god = curArr;
      break;
    }
  }
  return searchPoko(god,target);
};

const searchPoko = (nums,target)=>{
  let left = 0;
  let right = nums.length-1;
  while(left<=right){
    let mid = Math.floor((right+left)/2);
    if(nums[mid]===target) return true;
    else if(nums[mid]<target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}

/*
时间复杂度：O(log(mn))，其中 m 是矩阵的行数，n 是矩阵的列数。这是因为我们使用了二分查找，每次都将搜索空间缩小为之前的一半，直到找到目标值，或者搜索空间为空。

空间复杂度：O(1)，我们只使用了几个变量来存储左右边界和中点，所以空间复杂度是常数。
*/