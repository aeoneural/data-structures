var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.key = 0;
  this.start = 0;
};

Queue.prototype.enqueue = function(val) { 
  this.storage[this.key] = val; 
  this.key++;
};

Queue.prototype.dequeue = function() { 
  var first = this.storage[this.start];
  if (first) {
    delete this.storage[this.start];
    this.start++;
  }
  return first;
};

Queue.prototype.size = function(val) { 
  return this.key - this.start;
};

var q1 = new Queue();
q1.enqueue(1);