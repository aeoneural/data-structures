var Stack = function() {
  var someInstance = {};
  var key = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    key++; 
    storage[key] = value;
    console.log(storage)
 
  };

  someInstance.pop = function() {
    var lastElement = storage[key]
    if(key){ 
      delete storage[key];
      key--;
    }
    return lastElement
    key++;
    storage[key] = value;
      
  };

  someInstance.pop = function() {
    var last = storage[key];
    if (storage[key]) {
      
      delete storage[key];
      key--;
    }
    return last;
  };

  someInstance.size = function() {
    return key;

  };

  return someInstance;
};

var a = Stack()
a.push(1)

