/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

var TrieNode = function() {
  this.word = null;
  this.children = {};
};

var Trie = function() {
  this.root = new TrieNode();
};

Trie.prototype.insert = function(word) {
  let node = this.root;
  for (let char of word) {
      if (!node.children[char]) {
          node.children[char] = new TrieNode();
      }
      node = node.children[char];
  }
  node.word = word;
};

var findWords = function(board, words) {
  let res = [];
  let trie = new Trie();
  for (let word of words) {
      trie.insert(word);
  }

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          dfs(board, i, j, trie.root, res);
      }
  }
  return res;
};

var dfs = function(board, i, j, node, res) {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] === '#' || !node.children[board[i][j]]) {
      return;
  }
  let char = board[i][j];
  node = node.children[char];
  if (node.word) {
      res.push(node.word);
      node.word = null;   // ensure only print one time for each word
  }

  board[i][j] = '#';
  dfs(board, i + 1, j, node, res);
  dfs(board, i - 1, j, node, res);
  dfs(board, i, j + 1, node, res);
  dfs(board, i, j - 1, node, res);
  board[i][j] = char;
};

/*
通过使用字典树（Trie）和深度优先搜索（DFS）来解决。首先，我们可以将所有的单词添加到 Trie 中，然后遍历二维网格的每一个单元格，使用 DFS 来搜索所有以该单元格为起点的单词。

以下是详细的步骤：

1. 定义 TrieNode 类，每个 TrieNode 包含一个布尔值字段 isEnd，表示该节点是否为一个单词的结束，以及一个 TrieNode 类型的数组 next，用于指向下一个字符的节点。
2. 定义 Trie 类，包含一个 TrieNode 类型的根节点 root，以及一个 insert 方法，用于将单词添加到 Trie 中。
3. 定义 findWords 函数，首先创建一个 Trie，并将所有的单词添加到 Trie 中，然后遍历二维网格的每一个单元格，使用 DFS 来搜索所有以该单元格为起点的单词。
*/