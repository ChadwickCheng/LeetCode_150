/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
};

/*
时间复杂度：O(n*m)
空间复杂度：O(1)
进阶：使用 KMP 算法
*/