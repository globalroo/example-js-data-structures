const bubbleSort = (array) => {
	const sorted = array.slice(0);
	const length = array.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - 1; j++) {
			if (sorted[j] > sorted[j + 1]) {
				[sorted[j + 1], sorted[j]] = [sorted[j], sorted[j + 1]];
			}
		}
	}
	return sorted;
};

module.exports = {
	bubbleSort
};
