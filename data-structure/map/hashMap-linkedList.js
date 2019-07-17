//import {linkedList, linkedListNode} from '../linkedList/linkedList.js'
// 链表节点

class linkedListNode {
	constructor(element, next = null) {
		this.element = element;
		this.next = next;
	}
	showNode() {
		return `${this.element}`;
	}
}


// 创建链表

class linkedList {
	constructor() {
		this.length = 0
		this.head = null;
	}

	append(element) {
		let node = new linkedListNode(element), 
			current;
		// console.log(node.showNode());
		if (this.head === null) {
			this.head = node;
		}
		else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			// 找到链表末位节点
			current.next = node;
		}
		this.length++;
	}

	removeAt(position) {
		if (position >= 0 && position < this.length) {
			let current = this.head,
				previous,
				index = 0;
			// 移除首项
			if (position === 0) {
				this.head = current.next;
			}
			else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				// 跳过current
				previous.next = current.next;
			}
			this.length--;
			//console.log(current.element);
			return current.element;
		}
		else {
			// console.log(position);
			return null;
		}
	}

	insert(position, element) {
		let node = new linkedListNode(element);
		if (position >= 0 && position <= this.length) {
			let current = this.head,
				previous,
				index = 0;
			// console.log(position);
			if (position === 0) {
				node.next = current;
				this.head = node;
			}
			else {
				while (index++ < position) {
					current = current.next;
					previous = current;
				}
				previous.next = node;
				node.next = current;
			}
			this.length++;
			return true;
		}
		else {
			return false;
		}
	}

	remove(node) {
		return this.removeAt(this.indexOf(node));
	}

	indexOf(node) {
		let current = this.head,
			index = 0;
		while (current) {
			if (current.element === node) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;

	}

	toString() {
		let current = this.head,
			string = '';
		while (current) {
			string += current.element + 
			(current.next ? ' ' : '');
			current = current.next;
		}
		return string;
	}

	reverse() {
		let current = this.head,
			prev = null,
			next = null;
		while (current) {
			// 单独取出下一个节点
			next = current.next;
			// 改变当前节点指向
			current.next = prev;
			// 设置下一步节点
			prev = current;
			current = next;
		}
		this.head = prev;
		return this.head;
	}
}

let hashMap = (function() {
	var loseloseHashCode = function(key) {
		var hash = 0;
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	};

	var valuePair = function(key, value) {
		this.key = key;
		this.value = value;
		this.toString = function() {
			return `[${this.key}-${this.value}]`;
		}
	}

	class hashMap {
		constructor() {
			this.map = [];
		}
		put(key, value) {
			//if (this.map[loseloseHashCode(key)])
			var position = loseloseHashCode(key);
			if (this.map[position] == undefined) {
				this.map[position] = new linkedList;
			}
			this.map[position].append(new valuePair(key, value));
		}
		remove(key, value) {
			var position = loseloseHashCode(key);
			if (this.map[position] !== undefined) {
				let current = this.map[position].head;
				this.map[position].remove(new valuePair(key, value));
				// delete this.map[loseloseHashCode(key)];
				return true;
			} else {
				return false;
			}
		}
		get(key, value) {
			var position = loseloseHashCode(key);
			if (this.map[position] !== undefined) {
				let current = this.map[position].head,
					index = 0;
				while (index++ < this.map[position].length) {
					if (current.element.key === key) {
						return current.element;
					}
					current = current.next;
				}
			} else {
				return undefined;
			}
		}
	}
	return hashMap;
})();

// var hash = new hashMap;
// hash.put('ga', 'ga@1.com');
// hash.put('ga', 'gb@1.com');
// hash.put('cb', 'cb@2.com');
// console.log(hash.map);
// console.log(hash.get('ga'));
// hash.remove('cb');
// console.log(hash.map);
