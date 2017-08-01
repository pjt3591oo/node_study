var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test1', function(req, res, next) {
  res.send('respond with a resource1');
});

/* GET users listing. */
router.get('/test2', function(req, res, next) {
  res.send('respond with a resource2');
});

/* GET users listing. */
router.get('/test3', function(req, res, next) {
  res.send('respond with a resource3');
});

/* GET users listing. */
router.get('/test4', function(req, res, next) {
    res.send('respond with a resource4');
});

module.exports = router;
