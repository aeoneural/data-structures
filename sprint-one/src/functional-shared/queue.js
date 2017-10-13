var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {
    key: 0, 
    storage: {}, 
    start: 0
  };
  extend(instance, queueMethods);
  
  return instance;
};

var queueMethods = {};

queueMethods.dequeue = function() { 
  var first = this.storage[this.start];
  if (this.storage[this.start]) {
    delete this.storage[this.start];
    this.start++; 
  }
  return first;
  
};
queueMethods.enqueue = function(value) { 
  this.storage[this.key] = value;
  this.key++;

  
};
queueMethods.size = function(value) { 
  return this.key - this.start;
  
};





