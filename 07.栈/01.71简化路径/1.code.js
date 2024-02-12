/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = [];
  const parts = path.split('/');
  for(let part of parts){
    if(part==='..'){
      stack.pop();
    }else if(part!=='.'&&part!==''){
      stack.push(part);
    }
  }
  return '/'+stack.join('/');
};

/*
时间复杂度：O(n)
空间复杂度：O(n)

注意
始终以斜杠 '/' 开头：这表示路径是从根目录开始的。

两个目录名之间必须只有一个斜杠 '/'：不能有连续的斜杠，例如 "//"。

最后一个目录名（如果存在）不能以 '/' 结尾：也就是说，路径不能以 "/" 结尾，除非路径就是根目录 "/"。

路径中不能包含 "." 或 ".."："." 表示当前目录，".." 表示上一级目录。在简化路径时，需要将这些部分转换为实际的目录名。

任何其他格式的点（例如，'...'）均被视为文件/目录名称：在 Unix 风格的路径中，除了 "." 和 ".." 之外，其他包含点的部分都被视为文件或目录的名称。
*/