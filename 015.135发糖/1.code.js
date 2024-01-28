/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let n = ratings.length;
  let answer = new Array(n).fill(1);
  for(let i=1;i<n;i++) ratings[i]>ratings[i-1]?answer[i]=answer[i-1]+1:null;
  for(let i=n-2;i>=0;i--){
    if(ratings[i]>ratings[i+1]&&answer[i]<=answer[i+1]) answer[i] = answer[i+1]+1
  }
  return answer.reduce((pre,cur)=>pre+cur,0);
};
/*
时间复杂度：O(n)
空间复杂度：O(n)
*/