var extend = function(destination, source) { 
  for (var key in source) {
    destination[key] = source[key]; 
  }
};

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  
  
  extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  // var root = this;
  // console.log(this);
  var traverser = function(node) {
    if (node.value === target) {
      console.log(node.value);
      return true;  
    } else {
      node.children.forEach(function(subTree) {
        traverser(subTree);
      });
      
      return false; 
    }
  };
  return traverser(this);
};

var example = Tree(1);
example.addChild(2);
example.addChild(3);
example.addChild(4);
example.children[0].addChild(5);
console.log(example.contains(5))




/*
 * Complexity: What is the time complexity of the above functions?
 */
// .children property, an array containing a number of subtrees
// .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
// A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
// What is the time complexity of the above functions?