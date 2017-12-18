/**
 * Partition for Basic Quick sort using the last digit in the array as the pivot
 * @param  {array} array
 * @param  {number} start
 * @param  {number} end
 */
const partitionBasic = (array, start = 0, end = array.length - 1) => {
	if (start >= end) {
		return;
	}
	let pivot = array[end];
	let pIndex = start;

	for (let ix = start; ix < end; ix++) {
		if (array[ix] < pivot) {
			[array[ix], array[pIndex]] = [array[pIndex], array[ix]];
			pIndex += 1;
		}
	}
	[array[end], array[pIndex]] = [array[pIndex], array[end]];
	partitionBasic(array, start, pIndex - 1);
	partitionBasic(array, pIndex + 1, end);
};

/**
 * Basic Quick sort
 * @param  {array} original - return a sorted copy of this array
 */
const quickSortBasic = (original) => {
	const sorted = [...original];
	partitionBasic(sorted);
	return sorted;
};

module.exports = {
	quickSortBasic
};
