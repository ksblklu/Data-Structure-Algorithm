function knapSack(capacity, weights, values) {
	var i, w, a, b, ks = [];
	var n = values.length;
	for (i = 0; i <= n; i++) {
		ks[i] = [];
	}

	for (i = 0; i <= n; i++) {
		for (w = 0; w <= capacity; w++) {
			if (i == 0 || w == 0) {
				ks[i][w] = 0;
			} else if (w >= weights[i - 1]) {
				a = values[i - 1] + 
				ks[i - 1][w - weights[i - 1]];
				b = ks[i - 1][w];
				ks[i][w] = (a > b) ? a : b;
			} else {
				ks[i][w] = ks[i - 1][w];
			}
		}
	}
	return ks[n][capacity];
}


// var maxValue = knapSack;
// console.log(maxValue(5, [2, 3, 4], [3, 4, 5]));