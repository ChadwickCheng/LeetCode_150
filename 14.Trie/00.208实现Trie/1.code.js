var TrieNode = function(){
  this.isEnd = false;
  this.next = {};
}

var Trie = function() {
  this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  for(let char of word){
    if(!node.next[char]){
      node.next[char] = new TrieNode();
    }
    node = node.next[char];
  }
  node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root;
  for(let char of word){
    if(!node.next[char]){
      return false;
    }
    node = node.next[char];
  }
  return node.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for(let char of prefix){
    if(!node.next[char]){
      return false;
    }
    node = node.next[char];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/*
一个简单的字典树（Trie）可以看作是一个树形结构，其中每个节点代表一个字符，从根节点到任意一个节点的路径上经过的字符连接起来，就构成了一个字符串。根节点通常为空。

例如，假设我们有一个字典树，它包含了单词 "an", "ant", "all", "allot", "alloy", "are", "ate", "be"。那么这个字典树可能如下所示：
    root
   /  |  \
  a   b   e
 /|   |   |
n l   e   t
| |   |   |
t l   |   e
  |   |
  l   r
 /|   |
o o   e
| |
t y
在这个字典树中，每个节点代表一个字符，从根节点到任意一个节点的路径上经过的字符连接起来，就构成了一个字符串。例如，从根节点到第一个 "a" 节点的路径代表字符串 "a"，从根节点到第一个 "an" 节点的路径代表字符串 "an"，以此类推。
*/