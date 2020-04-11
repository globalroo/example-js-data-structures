const { createLinkedList } = require("src/linked-list");

describe("Exercise the linked list algorithm", () => {
	test("The list initialises", () => {
		const list = createLinkedList();
		expect(list.count).toBe(0);
	});
	test("Pushing an item to the list increments the counter", () => {
		const list = createLinkedList();
		list.push("test");
		expect(list.count).toBe(1);
	});
	test("A single item in the list represents the head and tail", () => {
		const list = createLinkedList();
		list.push("test");
		expect(list.head).toEqual(list.tail);
	});
	test("Two items in the list represent different head and tail", () => {
		const list = createLinkedList();
		list.push("head");
		list.push("tail");
		expect(list.head).not.toEqual(list.tail);
	});
});
