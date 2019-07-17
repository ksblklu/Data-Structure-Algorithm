class arrayList {
	constructor() {
		this.array = [];
	}

	insert(item) {
		this.array.push(item);
	}

	toString() {
		return this.array.join();
	}

	createNonSortedArray(size) {
		for (let i = size; i > 0; i--) {
			this.insert(i);
		}
	}

	bubbleSort() {
		let length = this.array.length;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - 1 - i; j++) {
				if (this.array[j] > this.array[j + 1]) {
					[this.array[j], this.array[j + 1]] = 
					[this.array[j + 1], this.array[j]];
				}
			}
		}
	}

	selectionSort() {
		let length = this.array.length,
			indexMin;

		for (let i = 0; i < length; i++) {
			indexMin = i;

			for (let j = i; j < length; j++) {
				if (this.array[indexMin] > this.array[j]) {
					indexMin = j;
				}
			}
			if (i !== indexMin) {
				[this.array[indexMin], this.array[i]] = 
				[this.array[i], this.array[indexMin]];
			}
		}
	}

	insertionSort() {
		let length = this.array.length,
			j,
			temp;
		for (let i = 1; i < length; i++) {
			j = i;
			temp = this.array[i];
			while (j > 0 && this.array[j - 1] > temp) {
				this.array[j] = this.array[j - 1];
				j--;
			}
			this.array[j] = temp;
		}
	}

	mergeSort() {
		if (this.array.length > 0) {
			this.array = this.mergeSortRec(this.array);
			return true;
		} 
	}

	mergeSortRec(array) {
		var length = array.length;
		if (length === 1) {
			return array;
		}

		var mid = Math.floor(length / 2), 
			left = array.slice(0, mid),
			right = array.slice(mid);

		return this.merge(this.mergeSortRec(left), this.mergeSortRec(right));
	}

	merge(left, right) {
		var result = [],
			il = 0,
			ir = 0;

		while(il < left.length && ir < right.length) {
			if (left[il] < right[ir]) {
				result.push(left[il++]);
			} else {
				result.push(right[ir++]);
			}
		}
		while (il < left.length) {
			result.push(left[il++]);
		}

		while (ir < right.length) {
			result.push(right[ir++]);
		}
		
		return result;
	}

	quickSort() {
		if (this.array.length > 0) {
			this.quick(this.array, 0, this.array.length - 1);
			return true;
		} 
	}
	quick(array, left, right) {
		var index;
		if (array.length > 1) {
			index = this.partition(array, left, right);

			if (left < index - 1) {
				this.quick(array, left, index - 1);
			}
			if (index < right) {
				this.quick(array, index, right);
			}
		}
	}
	partition(array, left, right) {
		var pivot = array[Math.floor((right + left) / 2)],
			i = left,
			j = right;

		while (i <= j) {
			while (array[i] < pivot) {
				i++;
			}
			while (array[j] > pivot) {
				j--;
			}
			if (i <= j) {
				[array[i], array[j]] = 
				[array[j], array[i]];
				i++;
				j--;
			}
		}
		return i;
	}

	heapSort() {
		var heapSize = this.array.length;
		if (heapSize > 0) {
			this.buildHeap(this.array);

			while (heapSize > 1) {
				heapSize--;
				[this.array[0], this.array[heapSize]] = 
				[this.array[heapSize], this.array[0]];
				this.heapify(array, heapSize, 0)
			}
		}
	}
	buildHeap(array) {
		let heapSize = array.length;
		for (let i = Math.floor(array.length / 2); i >= 0; i--) {
			this.heapify(array, heapSize, i);
		}
	}
	heapify(array, heapSize, i) {
		var left = i * 2 + 1,
			right = i * 2 + 2,
			largest = i;

		if (left < heapSize && array[left] > array[i]) {
			largest = left;
		}
		if(right < heapSize && array[right] > array[largest]) {
			largest = right;
		}

		if (largest !== i) {
			[array[i], array[largest]] = 
			[array[largest], array[i]];
			this.heapify(array, heapSize, largest);
		}
	}
}


// var array = new arrayList;
// array.createNonSortedArray(50);
// //console.log(array.toString());
// console.time('sort');
// array.heapSort();
// console.timeEnd('sort');
// console.log(array.toString());
// // console.time('sort');
// array.insertionSort();
// console.timeEnd('sort');


















