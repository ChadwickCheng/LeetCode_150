/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let totalGas=0,totalCost=0,tank=0,start=0;
  for(let i=0;i<gas.length;i++){
    totalCost+=cost[i];
    totalGas+=gas[i];
    tank+=gas[i]-cost[i];
    if(tank<0){
      start = i+1;
      tank=0;
    }
  }
  return totalGas>=totalCost?start:-1;
};
/*
时间复杂度：O(n)
空间复杂度：O(1)
*/