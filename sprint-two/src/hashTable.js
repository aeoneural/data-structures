/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  // limitedArray.storage = [] why ?
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };
  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
	var index = getIndexBelowMaxForKey(k, this._limit);
	// console.log(this._storage.get(index))
	if(this._storage.get(index) === undefined){ 
		this._storage.set(index, []) 
	}
	var bucket = this._storage.get(index)
	var bucketIndex = undefined;

	for(var i = 0; i < bucket.length; i++){ 
		if(bucket[i].hasOwnProperty(k)){ 
			bucketIndex = i;
		}
	}

	if (bucketIndex === undefined) { 
		var newobj = {}
		newobj[k] = v 
		bucket.push(newobj); // why ?? {[k] : v}
	}else { 
		bucket[bucketIndex][k] = v;
	}
};

HashTable.prototype.retrieve = function(k) {
	var index = getIndexBelowMaxForKey(k, this._limit);

  	var bucket = this._storage.get(index)
	
	if(bucket === undefined){ 
  		return undefined; 
  	}  
	for(var i = 0; i < bucket.length; i++){ 
		if(bucket[i].hasOwnProperty(k)){ 
			return bucket[i][k];
		}
	}
	return undefined
  
};

HashTable.prototype.remove = function(k) {

	var index = getIndexBelowMaxForKey(k, this._limit);
	var bucket = this._storage.get(index)
	// var indexInBuck = this.indexInBucket(bucket, k)

	// if(indexInBuck){ 
	// 	bucket.splice(indexInBuck, 1);
	// }  How can I refactor it into a helper function as a method in Hashtable ? 
	if(bucket) {
		for(var i = 0; i < bucket.length; i++){ 
			if(bucket[i].hasOwnProperty(k)){ 
				bucket.splice(i, 1)
				break
			}
		}
	}
};

// Hashtable.prototype.indexInBucket = function(bucket, k){ 
// 	if(bucket){
// 		for(var i = 0; i < bucket.length; i++){ 
// 			if(bucket[i].hasOwnProperty(k)){
// 				return i;
// 			}
// 		}
// 		return undefined 
// 	}
// 	return undefined
// }



var newtable = new HashTable()
newtable.insert('aygerim', '21')
newtable.insert('aygerim', '22')
console.log(newtable.retrieve('aygerim'))
/*
 * Complexity: What is the time complexity of the above functions?
 */


