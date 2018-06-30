
const router = require('express').Router();

const {cats} = require('../dummy-data');

router.get('/', (req,res,next) => {
	try {
		const catData = cats.peek();
		let response;
		if(catData) {
			response = Object.assign({status:'ok'}, catData);
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
		const catData = cats.peek();
		let response;
		if(catData) {
			response = Object.assign({status:'adopted'}, cats.dequeue());
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
