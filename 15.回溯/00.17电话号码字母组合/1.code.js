/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(digits.length===0) return [];
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  const res = [];
  
  const generate = (cur,poko) => {
    if(poko.length===0){
      res.push(cur);
      return;
    }
    for(let letter of map[poko[0]]){
      generate(cur+letter,poko.slice(1));
    }
  };

  generate('',digits);
  return res;
};

/*
时间复杂度：最坏的情况下，每个数字对应的都是4个字母（例如7和9），所以在回溯过程中，每个数字都可能产生4种分支，总共有N个数字，所以时间复杂度是 O(4^N)。但是，每次生成新的字符串时，都需要 O(N) 的时间，所以总的时间复杂度是 O(N * 4^N)。

空间复杂度：在回溯过程中，需要使用一个栈来保存中间状态，最坏的情况下，栈的深度可以达到 N，所以空间复杂度是 O(N)。但是，如果考虑结果集，那么空间复杂度会是 O(N * 4^N)，因为最坏的情况下，可能有 4^N 个长度为 N 的字符串。
*/