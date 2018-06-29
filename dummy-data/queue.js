class _Node {
	constructor(value) {
		this.value=value,
		this.next=null,
		this.prev=null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	enqueue(value) {
		const node = new _Node(value);

		if(this.first === null) {
			this.first = node;
		}

		if(this.last) {
			node.next = this.last;
			this.last.prev = node;
		}

		this.last = node;
	}

	dequeue() {
		if(this.first === null) {
			return;
		}

		const node = this.first;
		this.first = node.prev;

		if(node === this.last) {
			this.last = null;
		}

		return node.value;
	}

	peek() {
		if(this._isEmpty()) {
			return null;
		}
		return this.first.value;
	}

	_isEmpty() {
		return this.first === null;
	}

	displayFromFront() {
		let current = this.first;
		while(current !== null) {
			console.log(current.value);
			current = current.prev;
		}
		return;
	}
}

module.exports = Queue;
