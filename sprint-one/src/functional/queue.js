var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  var key = 0;
  var storage = {};
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value; 
    console.log(storage)
    storage[key] = value;

    key++;
  };

  someInstance.dequeue = function() {
    var firstElement = storage[end]
    if(storage[end]){    
        delete storage[end];
        end++;
    }
    return firstElement
  };

  someInstance.size = function() {
    return key-end;
    
    if (storage[end]) { 
      var last = storage[end];
      delete last;
      end++;
    }

    return last;
    
  };

  someInstance.size = function() {

    return key-end;
  };

  return someInstance;

  //test
};






