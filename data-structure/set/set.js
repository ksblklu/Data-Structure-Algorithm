class set {
	constructor() {
		this.items = {};
	}

	hasValue(value) {
		return this.items.hasOwnProperty(value);
	}

	add(value) {
		if (!this.hasValue(value)) {
			this.items[value] = value;
			return true;
		}
		else {
			return false;
		}
	}

	delete(value) {
		if (!this.hasValue(value)) {
			return false;
		}
		else {
			delete items[value];
			return true;
		}
	}
    // 并集
	union(otherSet) {
		let unionSet = new set;
		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}
		values = otherSet.values();
		for (let i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}

		return unionSet;
	}
	// 交集
	intersection(otherSet) {
		let intersectionSet = new set;
		let values = this.values();
		return values.filter(value => otherSet.hasValue(value));
	}
	// 差集
	difference(otherSet) {
		let differenceSet = new set;
		let values = this.values();
		for (let i = 0; i < values.length; i++) {
			if (!otherSet.hasValue(values[i])) {
				differenceSet.add(values[i]);
			}
		}
		return differenceSet;
	}
	// 子集
	subset(otherSet) {
		if (this.size() > otherSet.size()) {
			return false;
		}
		else {
			let values = this.values();
			for (let i = 0; i < values.length; i++) {
				if (!otherSet.hasValue(values[i])) {
					return false;
				}
			}
			return true;
		}
	}
	clear() {
		this.items = {};
	}

	size() {
		return Object.keys(this.items).length;
	}

	values() {
		return Object.values(this.items);
	}
}

// let set1 = new set;
// let set2 = new set;
// console.log(set1.add('ks'));
// console.log(set1.add('qq'));
// console.log(set1.add('saf'));
// set2.add('dk');
// set2.add('81');
// set2.add('ks');
// console.log(set1.values());
// console.log(set1.union(set2).values());
// console.log(set1.intersection(set2));
// console.log(set1.difference(set2).values());
// console.log(set1.subset(set2));