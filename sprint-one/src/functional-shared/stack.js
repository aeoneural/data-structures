var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    key: 0,
    storage: {},
  };
  
  extend(instance, stackMethods);
  
  return instance;

};


var stackMethods = {
  push: function (value) {
    this.key++;
    this.storage[this.key] = value;
  },
  pop: function () {
    var last = this.storage[this.key];
    if (last) {
      delete this.storage[this.key];
      this.key--;
    }
    return last;
  },
  size: function () {
    return this.key;
  }
};

