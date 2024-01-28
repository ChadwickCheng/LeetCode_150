/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a,b)=>b-a)
  let i = 0;
  while(i<citations.length&&citations[i]>i) i++;
  return i;
};

/*
时间复杂度：O(n log n)
空间复杂度：O(1)
*/