/* 해당 코드는 예제 코드들 입니다.*/


var express = require('express');
var  router = express.Router();

// jade 연습1
router.get('/jadetest1', function(req, res, next) {
    // get, post, put, delete

    res.render('test');
});

// jade 연습2
router.get('/jadetest2', function(req, res, next) {
    // get, post, put, delete

    res.render('index', { title: 'Express1231adfsa23' });
});

// query string 연습
router.get('/', function(req, res, next) {
       console.log(req.query);
       console.log(req.query['a']);
       console.log(req.query['b']);
       res.send('query success')
});

// body 연습
router.post('/', function(req, res, next) {
       console.log(req.body);
       console.log(req.body['a']);
       console.log(req.body['b']);
       res.send('body success')
});

// params 연습
router.get('/:a/:b/asd', function(req, res, next) {
       console.log(req.params);
       console.log(req.params['a']);
       console.log(req.params['b']);
       res.send('params success')
});

module.exports = router;
