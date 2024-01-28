/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = s.trim().split(' ');
  console.log('arr',arr);
  return arr[arr.length-1].length
};

const s = "   fly me   to   the moon  "
lengthOfLastWord(s)

/*
时间复杂度：O(n)
空间复杂度：O(m)
*/