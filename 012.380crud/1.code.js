var RandomizedSet = function() {
  this.map = {};
  this.values = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.map[val] !== undefined) return false;
  this.values.push(val);
  this.map[val] = this.values.length - 1;
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(this.map[val] === undefined) return false;
  let last = this.values[this.values.length - 1];// 数组获取最后一个元素
  this.map[last] = this.map[val];// 将哈希表中最后一个元素的索引替换为要删除元素的索引
  this.values[this.map[val]] = last;// 从哈希表获取删除元素的索引，数组中将last替换到此。
  this.values.pop();// 删除最后一个元素
  delete this.map[val];// 哈希表删除属性
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let randomIndex = Math.floor(Math.random() * this.values.length);
  return this.values[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */