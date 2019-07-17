class map {
	constructor() {
		this.items = {};
	}

	has(key) {
		return this.items.hasOwnProperty(key);
	}
	set(key, value) {
		this.items[key] = value;
	}
	get(key) {
		if (this.has(key)) {
			return this.items[key];
		} else {
			return null;
		}
	}
	keys() {
		return Object.keys(this.items);
	}
	values() {
		var values = [];
		for (var key in this.items) {
			if (this.has(key)) {
				values.push(this.items[key]);
			}
		}
		return values;
	}
	delete(key) {
		if (!this.has(key)) {
			return false;
		} else {
			delete this.items[key];
			return true;
		}
	}
}

/*
var dic = new map;
dic.set('ga', 'ga@163.com');
dic.set('gb', 'gb@163.com');
console.log(dic.values());
console.log(dic.keys());
dic.delete('gb');
console.log(dic.values());
*/
