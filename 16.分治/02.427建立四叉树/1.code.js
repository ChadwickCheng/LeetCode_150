/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  return cons(grid,0,0,grid.length)
};

const isLeaf = (grid,r,c,len) => {
  const firstVal = grid[r][c];
  for(let i=r;i<r+len;i++){
    for(let j=c;j<c+len;j++){
      if(grid[i][j]!==firstVal) return false;
    }
  }
  return true;
}

const cons = (grid,r,c,len) => {
  if(isLeaf(grid,r,c,len)) return new Node(grid[r][c]===1,true,null,null,null,null);
  const halfLen = len/2;
  const topLeft = cons(grid,r,c,halfLen);
  const topRight = cons(grid,r,c+halfLen,halfLen);
  const bottomLeft = cons(grid,r+halfLen,c,halfLen);
  const bottomRight = cons(grid,r+halfLen,c+halfLen,halfLen);
  return new Node(false,false,topLeft,topRight,bottomLeft,bottomRight);
}