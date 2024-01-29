/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let res = [];
  let i = 0;
  while (i < words.length) {
      let j = i + 1;
      let lineLength = words[i].length;
      while (j < words.length && lineLength + words[j].length + (j - i) <= maxWidth) {
          lineLength += words[j].length;
          j++;
      }
      let diff = maxWidth - lineLength;
      let numberOfWords = j - i;
      if (numberOfWords === 1 || j === words.length) {
          res.push(leftJustify(words, diff, i, j));
      } else {
          res.push(middleJustify(words, diff, i, j));
      }
      i = j;
  }
  return res;
};

function leftJustify(words, diff, i, j) {
  let spacesOnRight = diff - (j - i - 1);
  let res = words[i];
  for (let k = i + 1; k < j; k++) {
      res += ' ' + words[k];
  }
  res += ' '.repeat(spacesOnRight);
  return res;
}

function middleJustify(words, diff, i, j) {
  let spacesNeeded = j - i - 1;
  let spaces = Math.floor(diff / spacesNeeded);
  let extraSpaces = diff % spacesNeeded;
  let res = words[i];
  for (let k = i + 1; k < j; k++) {
      let spacesToApply = spaces + (extraSpaces-- > 0 ? 1 : 0);
      res += ' '.repeat(spacesToApply) + words[k];
  }
  return res;
}