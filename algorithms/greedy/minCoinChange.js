function minCoinChange(coinSet) {
	let coins = coinSet;

	this.makeChange = function(amount) {
		let change = [],
			total = 0;
		for (let i = coins.length - 1; i >= 0; i--) {
			var coin = coins[i];
			while ((total + coin) <= amount) {
				change.push(coin);
				total += coin;
			}
		}
		return change;
	}
}
// var coinChange = new minCoinChange([1, 5, 10, 25]);
// console.log(coinChange.makeChange(50));