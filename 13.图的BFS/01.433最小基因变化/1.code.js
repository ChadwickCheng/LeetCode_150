/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
  let queue = [[startGene,0]];
  let visited = new Set();

  while(queue.length){
    let [gene,step] = queue.shift();
    if(gene === endGene) return step;
    for(let nextGene of bank){
      if(!visited.has(nextGene)&&isValidMutation(gene,nextGene)){
        queue.push([nextGene,step+1]);
        visited.add(nextGene);
      }
    }
  }
  return -1;
};

const isValidMutation = (gene1,gene2) => {
  let diff = 0;
  for(let i=0;i<gene1.length;i++){
    if(gene1[i]!==gene2[i]) diff++;
    if(diff>1) return false;
  }
  return diff === 1;
}
/*
时间复杂度：在最坏的情况下，我们需要遍历基因库中的每一个基因序列。对于每一个基因序列，我们需要 O(1) 的时间来判断它是否已经被访问过，以及 O(M) 的时间来判断它是否是有效的突变（M 是基因序列的长度）。因此，总的时间复杂度是 O(NM)。

空间复杂度：我们需要一个队列来存储待访问的基因序列，以及一个集合来记录已经访问过的基因序列。在最坏的情况下，这两个数据结构的大小都可能达到 N，因此总的空间复杂度是 O(N)。
*/