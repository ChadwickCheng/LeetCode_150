/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  const generate = (cur,poko)=>{
    if(cur.length===nums.length){
      res.push(cur.slice());
      return;
    }
    for(let i=0;i<poko.length;i++){
      cur.push(poko[i]);
      generate(cur,poko.slice(0,i).concat(poko.slice(i+1)));
      cur.pop();
    }
  }
  generate([],nums);
  return res;
};
/*
这段代码的时间复杂度和空间复杂度都是 O(n*n!)。

时间复杂度：这是由于在最坏的情况下，我们需要遍历所有的 n! 个排列，对于每个排列，我们需要 O(n) 的时间来复制到结果中。

空间复杂度：这是由于我们需要存储所有的 n! 个排列，每个排列的长度为 n。此外，由于递归的深度为 n，所以递归栈的空间复杂度也为 O(n)。

这里的 n! 表示的是全排列的数量，即 n 个不同的元素的所有可能的排列方式的数量。
*/