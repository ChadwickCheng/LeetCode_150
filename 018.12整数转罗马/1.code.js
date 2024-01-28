/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const dict = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  let res = '';
  for(let [k,v] of dict){
    while(num>=v){
      num-=v;
      res+=k;
    }
  }
  return res;
};