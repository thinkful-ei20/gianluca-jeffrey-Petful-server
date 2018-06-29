'use strict';

const router = require('express').Router();

const dogData = [{
	imageURL:'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
	imageDescription: 'A smiling golden-brown golden retreiver trying to listen to music.',
	name: 'Chunky',
	sex: 'Male',
	age: 3,
	breed: 'Golden Retriever',
	story: 'He is deaf'
},{
	imageURL:'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350',
	imageDescription: 'A smiling white fluffy pupper.',
	name: 'Fluffball',
	sex: 'Female',
	age: 1,
	breed: 'White Dog',
	story: 'She is blind and no one want a blind dog'
},{
	imageURL:'https://www.rocketdogrescue.org/wp-content/uploads/2013/09/lightening.jpg',
	imageDescription: 'A Big Flappy Eared dog.',
	name: 'Ol\'Missy',
	sex: 'Female',
	age: 7,
	breed: 'Big Flappy Ear',
	story: 'Owners left her in a park and never came back'
},{
	imageURL:'https://amp.businessinsider.com/images/58a4d5e15490578d0d8b4b9e-750-563.jpg',
	imageDescription: 'An angry doggo, don\'t get too close.',
	name: 'Buster',
	sex: 'Male',
	age: 6,
	breed: 'Angry Dog',
	story: 'He has rabies and is really mean'
},
{
	imageURL:'https://www.bluecross.org.uk/sites/default/files/assets/images/20311lpr.jpg',
	imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
	name: 'Bucko',
	sex: 'Male',
	age: 4,
	breed: 'Flappy Ear Dog',
	story: 'He has a lazy eye.'
}];

router.get('/', (req,res,next) => {
	res.json(dogData[0]);
});

router.delete('/', (req,res,next) => {
	res.json(dogData.pop());
});

module.exports = router;