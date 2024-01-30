/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  arr = s.trim().replace(/\s+/g,' ').split(' ');
  // console.log('arr',arr);
  let j = arr.length-1;
  let temp;
  for(let i=0;i<Math.floor(arr.length/2);i++){
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    j--;
  };
  console.log('ans',arr);
  return arr.join(' ');
};

s = "a good   example"
reverseWords(s)

/*
时间复杂度：O(n)
空间复杂度：O(m)
*/