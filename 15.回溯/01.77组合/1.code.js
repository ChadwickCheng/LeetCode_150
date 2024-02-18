/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  const generate = (cur,start)=>{
    if(cur.length===k){
      res.push(cur.slice());
      return;
    }
    for(let i=start;i<=n;i++){
      cur.push(i);
      generate(cur,i+1);
      cur.pop();
    }
  };
  generate([],1);
  return res;
};
/*
这段代码的时间复杂度和空间复杂度都是 O(k * C(n, k))。

时间复杂度：这是由于在最坏的情况下，我们需要遍历所有的 C(n, k) 个组合，对于每个组合，我们需要 O(k) 的时间来复制到结果中。

空间复杂度：这是由于我们需要存储所有的 C(n, k) 个组合，每个组合的长度为 k。此外，由于递归的深度为 k，所以递归栈的空间复杂度也为 O(k)。

这里的 C(n, k) 表示的是组合数，即从 n 个不同的元素中选取 k 个元素的组合数量。
*/