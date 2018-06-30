
const router = require('express').Router();

const {dogs} = require('../dummy-data');

router.get('/', (req,res,next) => {
	try {
		const dogData = dogs.peek();
		let response;
		if(dogData) {
			response = Object.assign({status:'ok'}, dogData);
			res.json(response);
		} else {
			response = {message:'we\'re empty'};
			res.json(response);
		}
	}
	catch(err) {
		next();
	}
});

router.delete('/', (req,res,next) => {
	try {
		const dogData = dogs.peek();
		let response;
		if(dogData) {
			response = Object.assign({status:'adopted'}, dogs.dequeue());
			res.json(response);
		} else {
			response = {message:'we\'re empty'};
			res.json(response);
		}
	}
	catch(err) {
		next();
	}
});

module.exports = router;
