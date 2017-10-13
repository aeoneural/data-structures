var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods); 
  instance.key = 0; 
  instance.storage = {};
  // why can't I write instance = { key : 0, etc} here ? 
  
  return instance;
};

var stackMethods = {
  push: function(val) { 
    this.key++;
    this.storage[this.key] = val; 
     

  }, 
  pop: function() {
    console.log(this.storage[this.key]);
    var last = this.storage[this.key]; 
    if (last) {
      console.log('Hello')
      delete this.storage[this.key];
      this.key--;
    }
    console.log(this.storage);
    return last;
  },
  size: function() {
    return this.key;
  }
};

var s1 = Stack(); 
s1.push(1);
s1.pop()



