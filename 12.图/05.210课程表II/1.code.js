/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = Array.from({length:numCourses},()=>[]);
  const indegree = new Array(numCourses).fill(0);
  for(let [course,pre] of prerequisites){
    graph[pre].push(course);
    indegree[course]++;
  }

  const queue = [];
  const res = [];
  for(let i=0;i<numCourses;i++){
    if(indegree[i]===0) queue.push(i);
  }

  while(queue.length){
    let course = queue.shift();
    res.push(course);
    for(let nextCourse of graph[course]){
      if(--indegree[nextCourse]===0) queue.push(nextCourse);
    }
  }

  if(indegree.every(v=>v===0)){
    return res;
  }else{
    return [];
  }
};