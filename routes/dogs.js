const router = require('express').Router();

router.get('/', (req,res,next) => {
	res.json({
		imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
		imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
		name: 'Chunky',
		sex: 'Male',
		age: 3,
		breed: 'Golden Retriever',
		story: 'He has an eating disorder'
	});
});

module.exports = router;