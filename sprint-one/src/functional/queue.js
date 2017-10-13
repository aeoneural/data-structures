var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  var key = 0;
  var start = 0;
  var storage = {};
  var key = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
<<<<<<< HEAD
    storage[key] = value; 
    console.log(storage)
=======
    storage[key] = value;
>>>>>>> d2d0439071ed8117a56d4603eae85b948150c582
    key++;
  };
  // console.log(storage) why doesn't print ? 

  someInstance.dequeue = function() {
<<<<<<< HEAD
    var firstElement = storage[end]
    if(storage[end]){    
        delete storage[end];
        end++;
    }
    return firstElement
  };

  someInstance.size = function() {
    return key-end;
=======
    
    if (storage[start]) { 
      var last = storage[start];
      delete last;
      start++;
    }

    return last;
    
  };

  someInstance.size = function() {

    return key-start;
>>>>>>> d2d0439071ed8117a56d4603eae85b948150c582
  };

  return someInstance;

  //test
};


<<<<<<< HEAD
=======




>>>>>>> d2d0439071ed8117a56d4603eae85b948150c582
