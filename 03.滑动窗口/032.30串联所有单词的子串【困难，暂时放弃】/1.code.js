/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!s || !words || !words.length) return [];
  let wordLen = words[0].length;
  let allWordsLen = wordLen * words.length;
  let ans = [];
  let wordMap = {};

  // 统计每个单词的数量
  for (let w of words) {
      wordMap[w] ? wordMap[w]++ : (wordMap[w] = 1);
  }

  for (let i = 0; i <= s.length - allWordsLen; i++) {
      let wm = Object.assign({}, wordMap);
      for (let j = i; j < i + allWordsLen; j += wordLen) {
          let w = s.slice(j, j + wordLen);
          if (wm[w]) {
              wm[w]--;
              if (wm[w] === 0) delete wm[w];
          } else {
              break;
          }
      }
      if (Object.keys(wm).length === 0) ans.push(i);
  }
  return ans;
};