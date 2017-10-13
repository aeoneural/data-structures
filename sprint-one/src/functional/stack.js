var Stack = function() {
  var someInstance = {};
  var key = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
<<<<<<< HEAD
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
=======
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
>>>>>>> d2d0439071ed8117a56d4603eae85b948150c582
  };

  someInstance.size = function() {
    return key;
<<<<<<< HEAD

=======
>>>>>>> d2d0439071ed8117a56d4603eae85b948150c582
  };

  return someInstance;
};

var a = Stack()
a.push(1)

