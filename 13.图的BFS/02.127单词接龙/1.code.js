/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if(!wordSet.has(endWord)) return 0;
  const queue = [[beginWord,1]];

  while(queue.length){
    let [word,level] = queue.shift();
    if(word===endWord) return level;
    for(let i=0;i<word.length;i++){
      for(let j=0;j<26;j++){
        let newWord = word.slice(0,i)+String.fromCharCode(97+j)+word.slice(i+1);
        if(wordSet.has(newWord)){
          queue.push([newWord,level+1]);
          wordSet.delete(newWord);
        }
      }
    }
  }
  return 0;
};
/*
时间复杂度：在最坏的情况下，我们可能需要遍历字典中的每一个单词，并对每个单词进行 M 次变换尝试（每个位置都尝试一次变换），所以时间复杂度是 O(N * M)。

空间复杂度：我们使用了一个队列来存储待处理的单词，以及一个集合来存储字典中的单词。在最坏的情况下，这两个数据结构可能需要存储所有的 N 个单词，所以空间复杂度是 O(N * M)（因为每个单词的长度是 M）。
*/