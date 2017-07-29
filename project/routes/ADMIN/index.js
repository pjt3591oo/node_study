var express = require('express');
var router = express.Router();

var db = require('./db');
var users = require('./users');

router.use('/db', db);
router.use('/users', users);

module.exports = router;
