const { createLinkedList } = require("src/linked-list");

describe("List keeps count correctly", () => {
	test("The list initialises", () => {
		const list = createLinkedList();
		expect(list.count).toBe(0);
	});

	test("Pushing one item to the list increments the counter correctly", () => {
		const list = createLinkedList();
		list.push("test");
		expect(list.count).toBe(1);
	});

	test("Pushing two items to the list increments the counter correctly", () => {
		const list = createLinkedList();
		list.push("test");
		list.push("test");
		expect(list.count).toBe(2);
	});

	test("Popping an item decreases count", () => {
		const list = createLinkedList();
		list.push("test");
		list.push("test");
		list.pop();
		expect(list.count).toBe(1);
	});

	test("Deleting an item decreases count", () => {
		const list = createLinkedList();
		list.push("test");
		list.push("test");
		list.delete(0);
		expect(list.count).toBe(1);
	});

	test("Popping from an empty list does nothing", () => {
		const list = createLinkedList();
		list.pop();
		expect(list.count).toBe(0);
	});

	test("Deleteing from an empty list does nothing", () => {
		const list = createLinkedList();
		list.delete(0);
		expect(list.count).toBe(0);
	});
});

describe("List acquired correct values", () => {
	test("List gets item from index 0", () => {
		const list = createLinkedList();
		list.push("One");
		list.push("Two");
		list.push("Three");
		list.push("Four");
		list.push("Five");
		const node = list.get(0);
		expect(node.value).toBe("One");
	});
	test("List gets item from index 1", () => {
		const list = createLinkedList();
		list.push("One");
		list.push("Two");
		list.push("Three");
		list.push("Four");
		list.push("Five");
		const node = list.get(1);
		expect(node.value).toBe("Two");
	});
	test("List gets item from index 2", () => {
		const list = createLinkedList();
		list.push("One");
		list.push("Two");
		list.push("Three");
		list.push("Four");
		list.push("Five");
		const node = list.get(2);
		expect(node.value).toBe("Three");
	});
	test("List gets item from index 3", () => {
		const list = createLinkedList();
		list.push("One");
		list.push("Two");
		list.push("Three");
		list.push("Four");
		list.push("Five");
		const node = list.get(2);
		expect(node.value).toBe("Three");
	});
	test("List gets item from index 4", () => {
		const list = createLinkedList();
		list.push("One");
		list.push("Two");
		list.push("Three");
		list.push("Four");
		list.push("Five");
		const node = list.get(3);
		expect(node.value).toBe("Four");
	});
	test("List gets item from index 5", () => {
		const list = createLinkedList();
		list.push("One");
		list.push("Two");
		list.push("Three");
		list.push("Four");
		list.push("Five");
		const node = list.get(4);
		expect(node.value).toBe("Five");
	});
	test("List cannot get item from index 6", () => {
		const list = createLinkedList();
		list.push("One");
		list.push("Two");
		list.push("Three");
		list.push("Four");
		list.push("Five");
		const node = list.get(5);
		expect(node).toBeUndefined;
	});
	test("List cannot get item from index -1", () => {
		const list = createLinkedList();
		list.push("One");
		list.push("Two");
		list.push("Three");
		list.push("Four");
		list.push("Five");
		const node = list.get(-1);
		expect(node).toBeUndefined;
	});
});

describe("List reassigns indexes correctly", () => {
	describe("During addition of items", () => {
		test("Adding a single item to the list makes the item head tail next and prev", () => {
			const list = createLinkedList();
			list.push("head");
			const firstNode = list.get(0);
			expect(list.head).toEqual(firstNode);
			expect(list.tail).toEqual(firstNode);
			expect(firstNode.next).toEqual(firstNode);
			expect(firstNode.prev).toEqual(firstNode);
		});

		test("Add two items, ensure indexes are pointing at each other and head / tail correct", () => {
			const list = createLinkedList();
			list.push("head");
			list.push("tail");
			const firstNode = list.get(0);
			const secondNode = list.get(1);
			expect(list.head).toEqual(firstNode);
			expect(list.tail).toEqual(secondNode);
			expect(firstNode.next).toEqual(secondNode);
			expect(firstNode.prev).toEqual(list.tail);
			expect(secondNode.prev).toEqual(firstNode);
			expect(secondNode.next).toEqual(list.head);
		});

		test("Add three items, ensure indexes are correct and head / tail correct", () => {
			const list = createLinkedList();

			list.push("head");
			list.push("middle");
			list.push("tail");

			const firstNode = list.get(0);
			const secondNode = list.get(1);
			const thirdNode = list.get(2);

			expect(list.head).toEqual(firstNode);
			expect(list.tail).toEqual(thirdNode);
			expect(firstNode.next).toEqual(secondNode);
			expect(firstNode.prev).toEqual(list.tail);
			expect(secondNode.prev).toEqual(firstNode);
			expect(secondNode.next).toEqual(thirdNode);
			expect(thirdNode.prev).toEqual(secondNode);
			expect(thirdNode.next).toEqual(list.head);
		});
	});
	describe("During removal of items", () => {
		test("Delete single item resets indexes and count", () => {
			const list = createLinkedList();
			list.push("head");
			list.pop();
			expect(list.head).toBe(null);
			expect(list.tail).toBe(null);
			expect(list.count).toBe(0);
		});

		test("Delete single item from beginning of a list of two", () => {
			const list = createLinkedList();
			list.push("head");
			list.push("tail");

			const secondNode = list.get(1);
			list.delete(0);

			const firstNode = list.get(0);
			expect(firstNode).toEqual(secondNode);
			expect(list.head).toEqual(secondNode);
			expect(list.tail).toEqual(secondNode);
			expect(list.count).toBe(1);
		});

		test("Delete single item from the end of a list of two", () => {
			const list = createLinkedList();
			list.push("head");
			list.push("tail");

			const firstNode = list.get(0);
			const secondNode = list.get(1);

			expect(list.tail).toEqual(secondNode);

			list.delete(1);

			expect(list.tail).toEqual(firstNode);
			expect(list.head).toEqual(firstNode);
			expect(firstNode.next).toEqual(firstNode);
			expect(firstNode.prev).toEqual(firstNode);
		});

		test("Delete single item from the middle of a list of three", () => {
			const list = createLinkedList();
			list.push("head");
			list.push("middle");
			list.push("tail");

			const headNode = list.head;
			const tailNode = list.tail;

			list.delete(1);

			expect(headNode.next).toEqual(tailNode);
			expect(tailNode.prev).toEqual(headNode);
			expect(tailNode.next).toEqual(headNode);
			expect(headNode.prev).toEqual(tailNode);
		});
	});
});

describe("Prints the list", () => {
	test("Returns a stringified version of the list", () => {
		const list = createLinkedList();
		list.push("One");
		list.push("Two");
		list.push("Three");
		const returnedString = list.print();
		expect(returnedString).toMatchSnapshot();
	});
});

describe("Returns an array of the list values", () => {
	test("Array format of list returned", () => {
		const list = createLinkedList();
		list.push("One");
		list.push("Two");
		list.push("Three");
		const returnedArray = list.toArray();
		expect(returnedArray).toEqual(["One", "Two", "Three"]);
	});
});

// //delete head
// check head, tail, node
// //delete tail
// check head, tail, node
// //delete middle
// check head, tail, node

// test("A single item in the list represents the head and tail", () => {
// 	const list = createLinkedList();
// 	list.push("test");
// 	expect(list.head).toEqual(list.tail);
// });
// test("Two items in the list represent different head and tail", () => {
// 	const list = createLinkedList();
// 	list.push("head");
// 	list.push("tail");
// 	expect(list.head).not.toEqual(list.tail);
// });
