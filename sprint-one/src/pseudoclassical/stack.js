var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}; 
  this.key = 0; 
};


Stack.prototype.push = function(val) { 
  this.key++;
  this.storage[this.key] = val;
}; 
Stack.prototype.pop = function() { 
  var last = this.storage[this.key]; 
  if (last) {
    delete this.storage[this.key]; 
    this.key--;
  }
  return last;
};
Stack.prototype.size = function() { 
  return this.key;
};



