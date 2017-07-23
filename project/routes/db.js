var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const qwerr = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '11111111',
	database: 'coding_apple'
});

router.get('/b', function(req, res, next) {
    qwerr.query('SELECT *FROM apple1', [], function(err,data){
    	console.log(err);
        console.log(data);
        res.render('test', {'a': data});
    })
});


module.exports = router;
