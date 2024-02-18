/*
Kadane算法是一种用于解决最大子数组和问题的动态规划算法。其基本思想是，对于数组中的每个元素，我们都要计算以该元素结尾的子数组的最大和。然后，我们就可以找到全局的最大和。
*/

function kadaneAlgorithm(array) {
  let maxCurrent = array[0];
  let maxGlobal = array[0];

  for(let i = 1; i < array.length; i++) {
      maxCurrent = Math.max(array[i], maxCurrent + array[i]);
      if(maxCurrent > maxGlobal) {
          maxGlobal = maxCurrent;
      }
  }

  return maxGlobal;
}

/*
这段代码首先初始化maxCurrent和maxGlobal为数组的第一个元素。然后，对于数组中的每个元素，我们都计算以该元素结尾的子数组的最大和（maxCurrent），并更新全局最大和（maxGlobal）。最后，返回全局最大和。

这个算法的时间复杂度是O(n)，空间复杂度是O(1)，其中n是数组的长度。
*/