const nonRecursiveBinarySearch = (array, item) => {
	let found = false;
	let start = 0;
	let end = array.length-1;
	let result = -1;
	while (start <= end && !found) {
		const middle = Math.floor((start + end) / 2);
		if (item === array[middle]) {
			result = middle;
			found = true;
		} else {
			if (item < array[middle]) {
				end = middle -1;
			} else {
				start = middle +1;
			}
		}
	}
	return result;
};

const recursiveTernaryBinarySearch = (array, item, start = 0, end = array.length - 1) => {
	if (start > end) {
		return -1;
	}
	const middle = Math.floor((start + end) / 2);
	return (
		(array[middle] === item)
			? middle
			: (item < array[middle])
				? recursiveTernaryBinarySearch(array, item, start, middle - 1)
				: recursiveTernaryBinarySearch(array, item, middle + 1, end)
	);
};

const recursiveBinarySearch = (array, item, start = 0, end = array.length - 1) => {
	let result = -1;
	if (start <= end) {
		const middle = Math.floor((start + end) / 2);
		if (item === array[middle] ) {
			result = middle;
		} else if (item < array[middle]) {
			result = recursiveBinarySearch(array, item, start, middle - 1);
		} else {
			result = recursiveBinarySearch(array, item, middle + 1, end);
		}
	}
	return result;
};

const recursiveBinarySearchWithAbruptReturn = (array, item, start = 0, end = array.length - 1) => {
	if (start > end) {
		return -1;
	}
	const middle = Math.floor((start + end) / 2);
	if (item === array[middle] ) {
		return middle;
	}
	if (item < array[middle]) {
		return recursiveBinarySearchWithAbruptReturn(array, item, start, middle - 1);
	}
	return recursiveBinarySearchWithAbruptReturn(array, item, middle + 1, end);
};

module.exports = {
	nonRecursiveBinarySearch,
	recursiveTernaryBinarySearch,
	recursiveBinarySearch,
	recursiveBinarySearchWithAbruptReturn
};
