var TrieNode = function(){
  this.isEnd = false;
  this.next = {};
}

var WordDictionary = function() {
  this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
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
WordDictionary.prototype.search = function(word) {
  return this.dfs(word,0,this.root)
};

WordDictionary.prototype.dfs = function(word,index,node){
  if(index === word.length) return node.isEnd;
  let char = word[index];
  if(char==='.'){
    for(let key in node.next){
      if(this.dfs(word,index+1,node.next[key])){
        return true;
      }
    }
  }else if(node.next[char]){
    return this.dfs(word,index+1,node.next[char]);
  }
  return false;
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */