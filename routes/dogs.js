'use strict';

const router = require('express').Router();

const {dogs} = require('../dummy-data');

router.get('/', (req,res,next) => {
	const dogData = dogs.peek();
	if(dogData) {
		res.json(dogData);
	} else {
		res.json({message:'No Dogs up for Adoption.'});
	}
});

router.delete('/', (req,res,next) => {
	const dogData = dogs.peek();
	if(dogData) {
		res.json(dogs.dequeue());
	} else {
		res.json({message:'Can\'t adopt a non-existent dog.'});
	}
});

module.exports = router;
