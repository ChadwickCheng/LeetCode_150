/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  const tokenArr = ['+','-','*','/'];
  for(let token of tokens){
    if(tokenArr.includes(token)){
      const num2 = stack.pop();
      const num1 = stack.pop();
      switch(token){
        case '+':
          stack.push(num1+num2);
          break;
        case '-':
          stack.push(num1-num2);
          break;
        case '*':
          stack.push(num1*num2);
          break;
        case '/':
          stack.push(parseInt(num1/num2));
          break;
      }
    }else{
      stack.push(parseInt(token))
    }
  }
  return stack.pop();
};
/*
时间复杂度：O(n)
空间复杂度：O(n)
*/