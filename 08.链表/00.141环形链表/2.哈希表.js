var hasCycle = function(head) {
  let nodesSeen = new Set();
  while (head !== null) {
    if (nodesSeen.has(head)) {
      return true;
    } else {
      nodesSeen.add(head);
    }
    head = head.next;
  }
  return false;
};