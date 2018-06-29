'use strict';

const router = require('express').Router();

const cats = require('./cats.js');
const dogs = require('./dogs.js');

router.use('/cats', cats);
router.use('/dogs', dogs);

module.exports = router;