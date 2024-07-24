class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  sumValues() {
    if (!this.root) return 0;
	
	let rootval = this.root.val;
	
	function help(node){
		for (let child of node.children){
			rootval += child.val;
			if (child.children.length > 0){
				help(child);
			}
		}
	}
	
	help(this.root);
	return rootval;
  }

  countEvens() {
	if (!this.root) return 0;
	
	let numCount = this.root.val % 2 === 0 ? 1 : 0;
	
	function counterHelper(node){
		for (let child of node.children){
			if (child.val % 2 === 0) numCount++;
			if (child.children.length > 0){
				counterHelper(child);
			}
		}
	}
	counterHelper(this.root);
	return numCount;
  }

  numGreater(lowerBound) {
	if (!this.root) return 0;
	
	let counter = this.root.val > lowerBound ? 1 : 0;
	
	function counterHelper(node){
		for (let child of node.children){
			if (child.val > lowerBound) counter++;
			if (child.children.length > 0){
				counterHelper(child);
			}
		}
	}
	
	counterHelper(this.root);
	return counter;
  }
}

module.exports = { Tree, TreeNode };
