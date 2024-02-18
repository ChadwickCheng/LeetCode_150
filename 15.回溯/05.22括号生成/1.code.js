/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  const generate = (cur,left,right)=>{
    if(left===0&&right===0){
      res.push(cur);
      return;
    }
    left>0?generate(cur+'(',left-1,right):null;
    right>left?generate(cur+')',left,right-1):null;
  }
  generate('',n,n);
  return res;
};
/*
这段代码的时间复杂度和空间复杂度都是 O(4^n / sqrt(n))。

时间复杂度：这是由于在最坏的情况下，我们需要遍历所有可能的括号组合，这可能需要 O(4^n / sqrt(n)) 的时间，这是由卡塔兰数决定的，卡塔兰数是这类问题的通用解决方案。

空间复杂度：这主要取决于结果的数量和每个结果的大小。在最坏的情况下，每个可能的组合都是一个有效的结果，所以空间复杂度可能达到 O(4^n / sqrt(n))。此外，由于递归的深度最多为 2n，所以递归栈的空间复杂度为 O(n)。

请注意，这些都是最坏情况下的复杂度分析，实际的复杂度可能会低于这些上限。
*/