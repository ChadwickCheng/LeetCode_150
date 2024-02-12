/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length===1||s[0]===')'||s[0]==='}'||s[0]===']') return false;
  const l = [')',']','}'];
  const r = ['(','[','{'];
  const l2r = new Map();
  l2r.set(')','(');
  l2r.set(']','[');
  l2r.set('}','{');
  const stack = [];
  for(let i=0;i<s.length;i++){
    if(r.includes(s[i])){
      stack.push(s[i]);
    }else{
      if(stack[stack.length-1]===l2r.get(s[i])){
        stack.pop();
      }else{
        return false;
      }
    }
  };
  return stack.length === 0;
};
/*
时间复杂度：O(n)
空间复杂度：O(n)
*/