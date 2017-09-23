const { bubbleSort } = require("src/bubble-sort");
const { randomiseArray } = require("src/randomise-array");

const testArray = [10,9,8,7,6,5,4,3,2,1];
const sortedArray = testArray.sort((a, b) => a - b);
const randomisedArray = randomiseArray(testArray);

describe("Exercise the bubble sort algorithm", () => {
	test("A completely reversed array", () => {
		expect(bubbleSort(testArray)).toEqual(sortedArray);
	});
	test("A reasonably random array", () => {
		expect(bubbleSort(randomisedArray)).toEqual(sortedArray);
	});
	test("An already sorted array", () => {
		expect(bubbleSort(sortedArray)).toEqual(sortedArray);
	});
});
