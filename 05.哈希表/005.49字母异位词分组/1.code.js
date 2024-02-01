/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  for (const str of strs) {
    const sortedStr = Array.from(str).sort().join('');
    if (!map.has(sortedStr)) {
      map.set(sortedStr, [str]);
    } else {
      map.get(sortedStr).push(str);
    }
  }
  return Array.from(map.values());
};

/*
时间复杂度：O(nmlog(m))，其中 n 是 strs 的长度，m 是 strs 中字符串的最大长度。这是因为我们需要遍历 strs（复杂度为 O(n)），对于 strs 中的每个字符串，我们需要对其进行排序（复杂度为 O(mlog(m))）。所以总的时间复杂度是 O(nm*log(m))。

空间复杂度：O(n*m)，其中 n 是 strs 的长度，m 是 strs 中字符串的最大长度。这是因为我们需要一个 map 来存储每个排序后的字符串及其对应的原始字符串列表。在最坏的情况下，strs 中的每个字符串都不同，所以 map 的大小为 n，每个字符串的长度为 m。
*/