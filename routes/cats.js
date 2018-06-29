'use strict';

const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.json({
		imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
		imageDescription: 'Orange Bengal cat with black stripes lounging on concrete.',
		name: 'Jim',
		sex: 'Male',
		age: 10,
		breed: 'Bengal',
		story: 'Lazy Cat, No body cares about him, :('
	});
});

module.exports = router;