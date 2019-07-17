// ES5
let items = [];
function queue1() {
	this.enqueue = function(...elements) {
		items.push(...elements);
	};
	this.dequeue = function() {
		return items.shift();
	};
	this.front = function() {
		return items[0];
	}
	this.isEmpty = function() {
		return items.length == 0;
	}
}

// ES6
let queue = (function() {
	const items = new WeakMap();
	class queue {
		constructor() {
			items.set(this, []);
		}
		// 添加元素
		enqueue(...elements) {
			let q = items.get(this);
			q.push(...elements);
		}
		// 移除元素
		dequeue() {
			let q = items.get(this);
			return q.shift();
		}
		isEmpty() {
			let q = items.get(this);
			return q.length == 0;
		}
		print() {
			console.log(items.get(this));
		}		
	}
	return queue;
})();

// 优先队列
let priorityQueue = (function() {
	// 私有方法
	const items = new WeakMap();
	function queueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}
	class pQueue {
		constructor() {
			items.set(this, []);
		}
		// 添加优先级元素
		enqueue(element, priority) {
			let q = items.get(this);
			let qElement = new queueElement(element, priority);
			let added = false;
			for (let i = 0; i < q.length; i++) {
				if (qElement.priority < q[i].priority) {
					q.splice(i, 0, qElement);
					added = true;
					break;
				}
			}
			if (!added) {
				q.push(qElement);
			}
		}
		// 元素出队
		dequeue() {
			let q = items.get(this);
			return q.shift();
		}
	}
	return pQueue;
})();

// 循环队列
let circularQueue = (function() {
	const items = new WeakMap();
	
	class cQueue {
		constructor(nameList) {
			items.set(this, nameList.slice());
		}
		enqueue(...element) {
			let c = items.get(this);
			c.push(...element);
		}
		dequeue() {
			let c = items.get(this);
			return c.shift();
		}
		isEmpty() {
			let c = items.get(this);
			return c.length == 0;
		}
		hotPotato(num) {
			let c = items.get(this);
			if (c.length > 1) {
				for (let i = 0; i < num; i++) {
					c.push(c.shift());
				}
				let eliminated = '';
				eliminated += c.shift();
				console.log(`${eliminated} eliminated`);
			}
			else {
				console.log(`winner is ${c[0]}`);
			}
		}
	}

	return cQueue;
})();

// 初始化队列
// var q = new queue();
// var q2 = new queue2;
// var pQueue = new priorityQueue;
// var names = ['joe', 'jack', 'camilo', 'carl'];
// var cQueue = new circularQueue(names);

// cQueue.hotPotato(2);
// q.enqueue('joe');
// q2.enqueue('ks');
// pQueue.enqueue('a', 3);
// pQueue.enqueue('b', 1);
// console.log(pQueue.dequeue());
// console.log(pQueue.dequeue());

// q2.print();
// console.log(items);
// q.dequeue();
// console.log(items);