/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
class MinHeap {
  constructor(compare) {
      this.heap = [];
      this.compare = compare;
  }

  add(value) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
      while (index > 0) {
          let parent = (index - 1) >> 1;
          if (this.compare(this.heap[parent], this.heap[index]) > 0) {
              [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
              index = parent;
          } else {
              break;
          }
      }
  }

  extract() {
      let ret = this.heap[0];
      let last = this.heap.pop();
      if (this.heap.length > 0) {
          this.heap[0] = last;
          this.bubbleDown(0);
      }
      return ret;
  }

  bubbleDown(index) {
      let last = this.heap.length - 1;
      while (true) {
          let left = (index << 1) + 1;
          let right = (index << 1) + 2;
          let min = index;
          if (left <= last && this.compare(this.heap[left], this.heap[min]) < 0) min = left;
          if (right <= last && this.compare(this.heap[right], this.heap[min]) < 0) min = right;
          if (min !== index) {
              [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
              index = min;
          } else {
              break;
          }
      }
  }
}

var kSmallestPairs = function(nums1, nums2, k) {
  let heap = new MinHeap((a, b) => a[0] + a[1] - b[0] - b[1]);
  let res = [];
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
      heap.add([nums1[i], nums2[0], 0]);
  }
  while (k-- > 0 && heap.heap.length) {
      let [n1, n2, index] = heap.extract();
      res.push([n1, n2]);
      if (index + 1 < nums2.length) {
          heap.add([n1, nums2[index + 1], index + 1]);
      }
  }
  return res;
};