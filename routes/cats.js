'use strict';

const router = require('express').Router();

const catData = [{
	imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
	imageDescription: 'Orange Bengal cat with black stripes lounging on concrete.',
	name: 'Jim',
	sex: 'Male',
	age: 10,
	breed: 'Bengal',
	story: 'Owners did not want to take responsibility'
},{
	imageURL:'https://kittentoob.com/wp-content/uploads/2011/10/fatcat1.jpg', 
	imageDescription: 'Chubby grey and white cat laying on a carpet.',
	name: 'Betsy',
	sex: 'Female',
	age: 4,
	breed: 'Mixed',
	story: 'Eats, sleeps, and cats about, used to live in an apartment above a chinese restaurant'
},{
	imageURL:'http://www.pitt.edu/~rel66/images/orangetabbycat.jpg', 
	imageDescription: 'Little kitty cat.',
	name: 'Jake',
	sex: 'Male',
	age: 0,
	breed: 'Tabby',
	story: 'A little cutie pie!'
},{
	imageURL:'https://www.thehappycatsite.com/wp-content/uploads/2018/06/seal-point-cat-header.jpg', 
	imageDescription: 'Simeese cat with blue eyes, and a dark history.',
	name: 'Sybel',
	sex: 'Female',
	age: 6,
	breed: 'Simeese',
	story: 'Owners died in a terrible car accident. Authorities say it was due to an acient cat curse place upon them...'
},{
	imageURL:'http://nnimgt-a.akamaihd.net/transform/v1/crop/frm/3AijacentBN9GedHCvcASxG/882f8a32-9f79-4c2d-bd01-633866491d68.jpg/r0_0_2880_1798_w1200_h678_fmax.jpg', 
	imageDescription: 'Australian Black Panther',
	name: 'Black Panther',
	sex: 'Male/Female',
	age: 7,
	breed: 'Panther',
	story: 'We don\'t know how this Panther got into our adoption center'
},{
	imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_cH7NK0Jmzl2dOUFZLspUGYckOPXZ-lPCcIxvW4BVUouClXbE', 
	imageDescription: 'Black and Grey cat with a unique fur pattern',
	name: 'Tompkins',
	sex: 'Male',
	age: 4,
	breed: 'Mixed',
	story: 'Owners moved to another city'
}];

router.get('/', (req,res,next) => {
	res.json(catData[0]);
});

router.delete('/', (req,res,next) => {
	res.json(catData.pop());
});

module.exports = router;