const mysql = require('mysql');

const qwerr = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '11111111',
	database: 'coding_apple'
});

// select
qwerr.query('SELECT *FROM apple1 WHERE column1 = ?',[1], function(err,data){
	console.log(err);
	console.log(data); //리스트 형태로 데이터 반환
})
// select
qwerr.query('SELECT *FROM apple1 WHERE column1 = 1',[], function(err,data){
	console.log(err);
	console.log(data);  //리스트 형태로 데이터 반환
})

// inserts
qwerr.query('INSERT INTO apple1(column1, column2) VALUES (?, ?)', [1,2], function(err){
	console.log(err);
})
// insert
qwerr.query('INSERT INTO apple1(column1, column2) VALUES (1,2)', [], function(err){
	console.log(err);
})
