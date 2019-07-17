class stack {
	constructor() {
		this.items = [];
	}
	push(element) {
		return this.items.push(element);
	}
	pop() {
		return this.items.pop();
	}
	peek() {
		if (this.isEmpty()) {
			console.log('empty stack');
		}
		else {
			console.log(this.items[this.items.length - 1]);
		}
	}
	isEmpty() {
		return (this.items.length == 0);
	}
	print() {
		this.items.forEach(function(x) {
			console.log(x)
		});
	}
}

let stack2 = (function() {
	const items = new WeakMap();
	class stack {
		constructor() {
			items.set(this, []);
		}
		push(element) {
			let s = items.get(this);
			return s.push(element);
		}
		pop() {
			let s = items.get(this);
			return s.pop();
		}
		exportStack() {
			let s = items.get(this);
			return [].slice.call(s);
		}
	}
	return stack;
})();
// 10 - 2
function divideBy2(decNum) {
	var remStack = new stack,
	rem,
	binaryString = '';
	while (decNum > 0) {
		rem = Math.floor(decNum % 2);
		remStack.push(rem);
		decNum = Math.floor(decNum / 2);
	}

	while (!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}
	return binaryString;
}
// 10 - 2
function divideBy2v2(decNum) {
	var remStack = new stack2,
	rem,
	binaryString = [];
	while (decNum > 0) {
		rem = Math.floor(decNum % 2);
		remStack.push(rem);
		decNum = Math.floor(decNum / 2);
	}
	binaryString = remStack.exportStack();
	return binaryString.reverse().join('');
}
// console.log(divideBy2(255));
// console.log(divideBy2v2(255));