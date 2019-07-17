function knapSack(capacity, weights, values) {
	let n = values.length,
		load = 0,
		i = 0,
		value = 0;

	for (i = 0; i < n && load < capacity; i++) {
		if (weights[i] <= (capacity - load)) {
			value += values[i];
			load += weights[i];
		} else {
			let r = (capacity - load) / weights[i];
			value += r * values[i];
			load += r * weights[i];
		}
	}
	return value;
}

console.log(knapSack(5, [2, 3, 4], [3, 4, 5]));