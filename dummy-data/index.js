const animals = require('./seed-data');
const Q = require('./queue.js');


const initQueue = (arr) => {
	const q = new Q();
	for(let animal of arr) {
		q.enqueue(animal);
	}
	return q;
};


const cats = initQueue(animals.cats);
const dogs = initQueue(animals.dogs);

module.exports = {
	cats,
	dogs
};
