
var BinarySearchTree = function(value) {
	var binarySearchTree = {}
	binarySearchTree.value = value; 
	binarySearchTree.right = null; 
	binarySearchTree.left = null;
	
	binarySearchTree.insert = function(value) { 
		if (this.value > value) { 
			if(this.left === null){ 
				this.left = BinarySearchTree(value)
			} else{ 
				this.left.insert(value);
			}
		} else {
			if (this.right === null) { 
				this.right = BinarySearchTree(value)
			} else { 
				this.right.insert(value)
			}
		}
	}

	binarySearchTree.contains = function(value) { 
		//base case 
		if (this.value === value) { 
			return true
		}

		if (value < this.value) { 
			if (this.left) { 
				return this.left.contains(value)
			} else { 
				return false
			}
			
		} else { 
			if (this.right) { 
				return this.right.contains(value)
			} else { 
				return false
			}
			
		}
	
	}

	binarySearchTree.depthFirstLog = function(callback) { 
		callback(this.value)
		if (this.left) { 
			this.left.depthFirstLog(callback)
		}
		if (this.right) { 
			this.right.depthFirstLog(callback)
		}	

	}

	return binarySearchTree;

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
