let hashMap = (function() {
	var loseloseHashCode = function(key) {
		var hash = 0;
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	};

	class hashMap {
		constructor() {
			this.map = [];
		}
		put(key, value) {
			var position = loseloseHashCode(key);
			this.map[position] = value;
		}
		remove(key) {
			if (this.map[loseloseHashCode(key)]) {
				delete this.map[loseloseHashCode(key)];
				return true;
			} else {
				return false;
			}
		}
		get(key) {
			if (this.map[loseloseHashCode(key)]) {
				return this.map[loseloseHashCode(key)];
			} else {
				return false;
			}
		}
	}
	return hashMap;
})();

// var hash = new hashMap;
// hash.put('ga', 'ga@1.com');
// hash.put('cb', 'cb@2.com');
// console.log(hash.map);
// console.log(hash.get('ga'));
// hash.remove('cb');
// console.log(hash.map);
