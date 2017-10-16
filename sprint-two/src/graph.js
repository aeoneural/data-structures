// Instantiate a new graph
var Graph = function() {
  this.storage = []; 
  
};

var GraphNode = function(value, edge) {
  this.value = value;
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new GraphNode(node);
  this.storage.push(newNode);  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      return true;
    }
  }
  return false;
  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var i = 0; i < this.storage.length; i++) { 
    if (this.storage[i].value === node) { 
      for (var k = 0; k < this.storage[i].edges.length; k++) { 
        this.removeEdge(node, this.storage[i].edges[k]);
      }
      this.storage.splice(i, 1);
      
    }
  }  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) { 
    if (this.storage[i].value === fromNode) { 
      if (this.storage[i].edges.includes(toNode)) { 
        return true;
      } 
    }
  }
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) { 
    if (this.storage[i].value === fromNode) { 
      this.storage[i].edges.push(toNode);
    } else if (this.storage[i].value === toNode) { 
      this.storage[i].edges.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) { 
    
    if (this.storage[i].value === fromNode) { 
      var removeIndex = this.storage[i].edges.indexOf(toNode);
      // we will never forget the difference between splice and slice ;()
      this.storage[i].edges.splice(removeIndex, 1);
    } else if (this.storage[i].value === toNode) { 
      var removeIndex = this.storage[i].edges.indexOf(fromNode);
      this.storage[i].edges.splice(removeIndex, 1);
    }
  }
   
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
var graph = new Graph();
var connectToFive = function(item) {
  graph.addEdge(item, 5);
};
graph.addNode(5);
graph.addNode(2);
graph.addNode(1);
graph.addNode(3);
graph.forEachNode(connectToFive);






