var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods); 
  instance.storage = {};
  instance.start = 0;
  instance.key = 0; 
  //test aik
  return instance; 
  
};

var queueMethods = {
  enqueue: function(val) { 
    
    this.storage[this.key] = val; 
    this.key++;
   
  }, 
  dequeue: function() { 
    var first = this.storage[this.start];
    if (first) {
      delete this.storage[this.start];
      this.start++;
    }
    return first;
  }, 
  size: function() {
    return this.key - this.start;
  }
};



