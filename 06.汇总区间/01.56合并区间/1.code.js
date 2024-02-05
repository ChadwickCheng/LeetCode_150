/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length===1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  let ele = intervals[0];
  for(let i=1;i<intervals.length;i++){
    if(intervals[i][0]<=ele[1]){
      ele[1] = Math.max(ele[1], intervals[i][1]);
    }else{
      ans.push(ele);
      ele = intervals[i]
    }
  }
  ans.push(ele);
  return ans;
};

const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals))

/*
时间复杂度是 O(n log n)
空间复杂度是 O(1)
*/