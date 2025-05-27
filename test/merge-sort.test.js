const mergeSort = require('../src/merge-sort');

describe('mergeSort', () => {
  it('should sort an empty array', () => {
    const arr = [];
    const originalArr = [...arr];
    expect(mergeSort(arr)).toEqual([]);
    expect(arr).toEqual(originalArr); // Check original array is not modified
  });

  it('should sort an array with one element', () => {
    const arr = [5];
    const originalArr = [...arr];
    expect(mergeSort(arr)).toEqual([5]);
    expect(arr).toEqual(originalArr);
  });

  it('should sort an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5]);
    expect(arr).toEqual(originalArr);
  });

  it('should sort a reverse-sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    const originalArr = [...arr];
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5]);
    expect(arr).toEqual(originalArr);
  });

  it('should sort an array with duplicate elements', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const originalArr = [...arr];
    expect(mergeSort(arr)).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    expect(arr).toEqual(originalArr);
  });

  it('should sort an array with an odd number of elements', () => {
    const arr = [7, 3, 9, 1, 5];
    const originalArr = [...arr];
    expect(mergeSort(arr)).toEqual([1, 3, 5, 7, 9]);
    expect(arr).toEqual(originalArr);
  });

  it('should sort an array with an even number of elements', () => {
    const arr = [8, 2, 10, 4, 6, 0];
    const originalArr = [...arr];
    expect(mergeSort(arr)).toEqual([0, 2, 4, 6, 8, 10]);
    expect(arr).toEqual(originalArr);
  });

  it('should not modify the original array', () => {
    const arr = [3, 1, 2];
    const originalArr = [...arr]; // Create a shallow copy for comparison
    const sortedArr = mergeSort(arr);
    expect(arr).toEqual(originalArr); // Check content
    expect(arr).not.toBe(sortedArr); // Check reference if mergeSort returns a new array
  });

  it('should sort an array with negative numbers', () => {
    const arr = [-3, -1, -4, -1, -5];
    const originalArr = [...arr];
    expect(mergeSort(arr)).toEqual([-5, -4, -3, -1, -1]);
    expect(arr).toEqual(originalArr);
  });

  it('should sort an array with mixed positive and negative numbers', () => {
    const arr = [3, -1, 4, -1, 5, -9, 2, -6, 5, 0, 3, -5];
    const originalArr = [...arr];
    expect(mergeSort(arr)).toEqual([-9, -6, -5, -1, -1, 0, 2, 3, 3, 4, 5, 5]);
    expect(arr).toEqual(originalArr);
  });
});
