var express = require('express');
var router = express.Router();

const post = require('./post');

router.use('/post', post);

module.exports = router;
