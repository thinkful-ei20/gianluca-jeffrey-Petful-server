'use strict';

const router = require('express').Router();

const {cats} = require('../dummy-data');

router.get('/', (req,res,next) => {
	const catData = cats.peek();
	if(catData) {
		res.json(catData);
	} else {
		res.json({message:'No Cats up for Adoption.'});
	}
});

router.delete('/', (req,res,next) => {
	const catData = cats.peek();
	if(catData) {
		res.json(cats.dequeue());
	} else {
		res.json({message:'Can\'t adopt a non-existent cat.'});
	}
});

module.exports = router;
