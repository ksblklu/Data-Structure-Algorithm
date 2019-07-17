// 双向链表节点

class doubleLinkedListNode {
	constructor(element) {
		this.element = element;
		this.prev = null;
		this.next = null;
	}
}


// 创建双向链表
class doubleLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	// 任意位置添加节点
	insert(position, element) {
		let node = new doubleLinkedListNode(element),
			current = this.head,
			prev,
			index = 0;
		if (position >= 0 && position <= this.length) {
			if (position === 0) { // 首项添加
				if (!this.head) {
					this.head = node;
					this.tail = node;
				}
				else {
					node.next = current;
					current.prev = node;
					this.head = node;
				}
			}
			else if (position === this.length) { // 尾项添加
				current = this.tail;
				current.next = node;
				node.prev = current;
				this.tail = node;
			}
			else {
				while (index++ < length) {
					prev = current;
					current = current.next
				}
				node.next = current;       // 改变节点的next指向
				prev.next = node;

				current.prev = node;       // 改变节点的prev指向
				node.prev = prev;
			}
			this.length++;
		}
		else {
			return false;
		}
	}

	// 任意位置删除节点
	removeAt(position) {
		
		if (position >= 0 && position < this.length) {
			let current = this.head,
				prev,
				index = 0;

			switch (position) {
				case 0:
				if (this.length === 1) {
					this.head = current.next;
					this.tail = null;
				}
				else {
					current.next.prev = null;
					this.head = current.next;
				}
				break;

				case (this.length - 1):
				current = this.tail;
				current.prev.next = null;
				this.tail = current.prev;
				current.prev = null;
				break;

				default:
				while (index++ < position) {
					prev = current
					current = current.next;
				} 
				prev.next = current.next;
				current.next.prev = current.prev;
				break;
			}
			this.length--;
			return current.element;
		}
	}
	toString() {
		let current = this.head,
			string = '';
		while (current) {
			string += current.element + (current.next ? ',' : '');
			current = current.next;
		}
		return string;
	}
}

// var dlist = new doubleLinkedList;
// dlist.insert(0,'koala');
// dlist.insert(0, 'kk');
// dlist.insert(0, 'cc');
// dlist.insert(0, 'cc');

// console.log(dlist.toString());
// dlist.removeAt(0);
// dlist.removeAt(1);
// console.log(dlist.toString());























