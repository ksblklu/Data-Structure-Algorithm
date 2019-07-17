// binarySearch
arrayList.prototype.binarySearch = function(item) {
	this.quickSort();

	let low = 0,
		high = this.array.length - 1,
		mid,
		element;

	while (low <= high) {
		mid = Math.floor((low + high) / 2);
		element = this.array[mid];
		if (element < item) {
			low = mid + 1;
		} else if (element > item) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
} 



// var a = new arrayList;
// a.createNonSortedArray(10);
// console.time('search');
// console.log(a.binarySearch(110));
// console.timeEnd('search');
// console.log(a.toString());


























