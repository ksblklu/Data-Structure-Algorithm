class treeNode {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

class binarySearchTree {
	constructor() {
		this.root = null;
	}

	// 递归插入节点
	insert(key) {
		let newNode = new treeNode(key);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}
	insertNode(node, newNode) {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}



	// 查找节点
	search(key) {
		return this.searchNode(this.root, key);
	}

	searchNode(node, key) {
		if (node === null) {
			return false;
		} 
		if (key < node.key) {
			return this.searchNode(node.left, key);
		} else if (key > node.key) {
			return this.searchNode(node.right, key);
		} else if (key === node.key) {
			return true;
		} else {
			return false;
		}
	}

    // 打印节点
    printNode(value) {
    	console.log(value);
    }

	// 中序遍历
	inOrderTraverse(callback) {
		this.inOrderTraverseNode(this.root, callback);
	}

	inOrderTraverseNode(node, callback) {
		if (node !== null) {
			this.inOrderTraverseNode(node.left, callback);
			callback(node.key);
			this.inOrderTraverseNode(node.right, callback);
		}
	}

	// 先序遍历
	preOrderTraverse(callback) {
		this.preOrderTraverseNode(this.root, callback);
	}
	preOrderTraverseNode(node, callback) {
		if (node !== null) {
			callback(node.key);
			this.preOrderTraverseNode(node.left, callback);
			this.preOrderTraverseNode(node.right, callback);
		}
	}

	// 后序遍历
	postOrderTraverse(callback) {
		this.postOrderTraverseNode(this.root, callback);
	}
	postOrderTraverseNode(node, callback) {
		if (node !== null) {
			this.postOrderTraverseNode(node.left, callback);
			this.postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}

	// 返回树中最小的值／节点
	min() {
		return this.minNode(this.root);
	}

	minNode(node) {
		if (node) {
			while (node && (node.left !== null)) {
				node = node.left;
			}
			return node.key
		} else {
			return null;
		}
	}

	// 返回树中最大的值／节点
	max() {
		return this.maxNode(this.root);
	}

	maxNode(node) {
		if (node) {
			while (node && (node.right !== null)) {
				node = node.right;
			}
			return node.key;
		} else {
			return null;
		}
	}

	// 移除某个节点
	remove(key) {
		this.root = this.removeNode(this.root, key);
	}
	removeNode(node, key) {
		if (node !== null) {
			if (key < node.key) {
				node.left = this.removeNode(node.left, key);
				return node;
			} else if (key > node.key) {
				node.right = this.removeNode(node.right, key);
				return node;
			} else if (key === node.key) {
				if (node.left === null && node.right === null) {
					node = null;
					return node;
				} 
				if (node.left === null) {
					node = node.right;
					return node;
				} else if (node.right === null) {
					node = node.left;
					return node;
				}

				var aux = this.findMinNode(node.right);
				node.key = aux.key;
				node.right = this.removeNode(node.right, aux.key);
				return node;
			}
		} else {
			return null;
		}
	}
	findMinNode(node) {
		while (node && (node.left !== null)) {
			node = node.left;
		}
	return node;
	}
}

// let tree = new binarySearchTree;
// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14); 
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);
// tree.insert(6);
// console.log(tree.search(20));
// //tree.inOrderTraverse(tree.printNode);
// tree.remove(11);
// console.log(tree.searchNode(20));
//tree.postOrderTraverse(tree.printNode);