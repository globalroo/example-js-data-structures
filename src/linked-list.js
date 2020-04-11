const createNode = (value) => ({
	value,
	next: null,
	prev: null
});

const createCircularList = () => ({
	head: null,
	count: 0,
	tail: null,

	push(value) {
		const node = createNode(value);

		if (this.isEmpty) {
			node.prev = node;
			node.next = node;
			this.head = node;
			this.tail = node;
			this.current = node;
		} else {
			node.prev = this.tail;
			node.next = this.head;
			this.head.prev = node;
			this.tail.next = node;
			this.tail = node;
		}
		this.count += 1;

		return node;
	},

	pop() {
		return this.delete(this.count - 1);
	},

	get(index) {
		if (this.isEmpty) return;
		if (index < 0 || index > this.count - 1) return;
		if (index === 0) return this.head;
		if (index === this.count - 1) return this.tail;
		let node = this.head.next;
		for (let i = 1; i < index; i++) {
			node = node.next;
		}
		return node;
	},

	delete(index) {
		const node = this.get(index);
		if (!node) return;

		this.count -= 1;

		if (this.isEmpty) {
			this.head = null;
			this.tail = null;
			return node;
		}

		if (node === this.head) {
			this.head = this.head.next;
			this.head.prev = this.tail;
			this.tail.next = this.head;
			return node;
		}

		if (node === this.tail) {
			this.tail = this.tail.prev;
			this.tail.next = this.head;
			this.head.prev = this.tail;
			return node;
		}

		node.next.prev = node.prev;
		node.prev.next = node.next;

		return node;
	},

	get isEmpty() {
		return this.count === 0;
	},
	toArray() {
		const listArray = [];
		let current = this.head;
		for (i = 0; i < this.count; i++) {
			listArray.push(current.value);
			current = current.next;
		}
		return listArray;
	},
	print() {
		let beautify = "";
		let current = this.head;
		for (i = 0; i < this.count; i++) {
			beautify += `[${i}] ${JSON.stringify(current.value)}\r\n`;
			current = current.next;
		}
		beautify += `[HEAD] ${JSON.stringify(this.head.value)}\r\n`;
		beautify += `[TAIL] ${JSON.stringify(this.tail.value)}\r\n`;

		return beautify;
	}
});

module.exports = { createLinkedList: createCircularList };
