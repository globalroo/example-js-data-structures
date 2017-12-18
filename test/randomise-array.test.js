const { randomiseArray } = require("src/randomise-array");

const testArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

describe("Exercise the randomise algorithm", () => {
	test("A randomised array is not equal to the original array", () => {
		expect(randomiseArray(testArray)).not.toEqual(testArray);
	});
});
