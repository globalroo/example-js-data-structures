const {
	nonRecursiveBinarySearch,
	recursiveBinarySearch,
	recursiveTernaryBinarySearch,
	recursiveBinarySearchWithAbruptReturn
} = require("src/binary-search");

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const testSearchFunctions = [
	{
		name: "recursiveTernaryBinarySearch",
		binarySearch: recursiveTernaryBinarySearch
	},
	{
		name: "recursiveBinarySearch",
		binarySearch: recursiveBinarySearch
	},
	{
		name: "nonRecursiveBinarySearch",
		binarySearch: nonRecursiveBinarySearch
	},
	{
		name: "recursiveBinarySearchWithAbruptReturn",
		binarySearch: recursiveBinarySearchWithAbruptReturn
	}
];

testSearchFunctions.forEach((testFunction) => {
	describe(`Exercise the ${testFunction.name} algorithm`, () => {
		test("Find an item in position 0", () => {
			expect(testFunction.binarySearch(testArray, 1)).toEqual(0);
		});
		test("Not find an item that doesn't exist", () => {
			expect(testFunction.binarySearch(testArray, 11)).toEqual(-1);
		});
		test("Find an item at the end of the array", () => {
			expect(testFunction.binarySearch(testArray, 10)).toEqual(9);
		});
		test("Find an item in the middle", () => {
			expect(testFunction.binarySearch(testArray, 5)).toEqual(4);
		});
		test("Find an item middle top half", () => {
			expect(testFunction.binarySearch(testArray, 8)).toEqual(7);
		});
		test("Find an item middle bottom half", () => {
			expect(testFunction.binarySearch(testArray, 3)).toEqual(2);
		});
	});
});
