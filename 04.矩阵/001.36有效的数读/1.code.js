/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let rows = Array.from({length:9},()=>new Map());
  let cols = Array.from({length:9},()=>new Map());
  let boxes = Array.from({length:9},()=>new Map());

  for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
      let num = board[i][j];
      if(num!=='.'){
        let boxIdx = Math.floor(i/3)*3+Math.floor(j/3);//第几个九宫格
        rows[i].set(num,(rows[i].get(num)||0)+1);
        cols[j].set(num,(cols[j].get(num)||0)+1);
        boxes[boxIdx].set(num,(boxes[boxIdx].get(num)||0)+1);
        if(rows[i].get(num)>1||cols[j].get(num)>1||boxes[boxIdx].get(num)>1) return false;
      }
    }
  }
  return true;
};
/*
时间复杂度 O(1)
空间复杂度 O(1)
*/