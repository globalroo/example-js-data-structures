const { quickSortBasic } = require("src/quick-sort");
const { randomiseArray } = require("src/randomise-array");
const { unsorted } = require("test/unsorted-number-array");

const sortIt = (a, b) => a - b;
const sorted = unsorted.sort(sortIt);
const testArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const sortedArray = testArray.sort(sortIt);
const randomisedArray = randomiseArray(testArray);

describe("Quicksort (basic) test", () => {
	test("The result is the same as the system sort", () => {
		const quickSorted = quickSortBasic(unsorted);
		expect(quickSorted).toEqual(sorted);
	});
	test("A completely reversed array", () => {
		expect(quickSortBasic(testArray)).toEqual(sortedArray);
	});
	test("A reasonably random array", () => {
		expect(quickSortBasic(randomisedArray)).toEqual(sortedArray);
	});
	test("An already sorted array", () => {
		expect(quickSortBasic(sortedArray)).toEqual(sortedArray);
	});
});
