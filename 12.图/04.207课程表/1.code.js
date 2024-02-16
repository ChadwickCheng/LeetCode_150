/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = Array.from({length:numCourses},()=>[]);
  let indegree = Array(numCourses).fill(0);
  for(let [course,pre] of prerequisites){
    graph[pre].push(course);
    indegree[course]++;
  }

  let queue = [];
  for(let i=0;i<numCourses;i++){
    if(indegree[i]===0) queue.push(i);
  }

  while(queue.length){
    let course = queue.shift();
    for(let nextCourse of graph[course]){
      indegree[nextCourse]--;
      if(indegree[nextCourse]===0) queue.push(nextCourse);
    }
  }

  return indegree.every(v=>v===0);
};
/*
1. 创建一个图，其中每个节点是一个课程，每条边表示先修课程的要求。
2. 创建一个数组，用于存储每个节点的入度（即指向该节点的边的数量）。
3. 使用队列进行广度优先搜索，首先将所有入度为0的节点（即没有先修课程要求的课程）添加到队列中。
4. 从队列中取出一个节点，然后遍历该节点的所有邻居，将邻居的入度减一。如果邻居的入度变为0，那么将邻居添加到队列中。
5. 如果最后所有的节点的入度都变为0，那么返回 true，否则返回 false。

时间复杂度：我们需要遍历所有的课程和先修课程，因此时间复杂度是 O(N + M)。

空间复杂度：我们需要存储图和入度数组，因此空间复杂度也是 O(N + M)。
*/