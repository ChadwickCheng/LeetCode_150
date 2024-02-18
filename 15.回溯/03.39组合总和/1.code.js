/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [];
  const generate = (cur,start,poko)=>{
    if(poko===0){
      res.push(cur.slice());
      return;
    }
    if(poko<0) return;
    for(let i=start;i<candidates.length;i++){
      cur.push(candidates[i]);
      generate(cur,i,poko-candidates[i]);
      cur.pop();
    }
  };
  generate([],0,target);
  return res;
};
/*
这段代码的时间复杂度和空间复杂度都取决于问题的具体情况。

时间复杂度：在最坏的情况下，我们需要遍历所有可能的组合，这可能需要 O(n^target) 的时间，其中 n 是候选数字的数量，target 是目标值。但是在实际情况中，由于我们在剩余的目标值小于0时会立即结束递归，所以实际的时间复杂度可能会低于这个上限。

空间复杂度：这主要取决于结果的数量和每个结果的大小。在最坏的情况下，每个可能的组合都是一个有效的结果，所以空间复杂度可能达到 O(n^target)。此外，由于递归的深度最多为 target，所以递归栈的空间复杂度为 O(target)。

请注意，这些都是最坏情况下的复杂度分析，实际的复杂度可能会低于这些上限。
*/