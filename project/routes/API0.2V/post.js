var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var client = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '11111111',
	database: 'board'
});

// get     전체 글 보기, 특정 글 보기
// post    글 쓰기
// put     글 수정
// delete  글 삭제

// table name : board

router.get('/', function(req, res){
    let page = req.query.page || 1;
    client.query('SELECT *FROM board', [], function(err, data){
        res.render('post', {postList: data});
    });
})

//게시글 작성 페이지
router.get('/edit', function(req, res){
    res.render('edit');
})

//게시글 수정 페이지
router.get('/edit/:id', function(req, res){
	let boardId = req.params.id;

	client.query('SELECT *FROM board WHERE id = ?', [boardId], function(err, data){
		console.log(data[0])
		res.render('modi', {
			id: data[0]['id'],
			title: data[0]['title'],
			content: data[0]['content'],
			author: data[0]['author']
		});
	})
})

router.post('/', function(req, res){
    let title = req.body.title;
    let content = req.body.content;
    let author = req.body.author;

    let sql = 'INSERT INTO board(title, content, author) VALUES(?, ?, ?)';

    client.query(sql, [title, content, author], function(){
        res.redirect('/APIV0.2/post');
    });

})

router.post('/modi', function(req, res){
    let title = req.body.title;
    let content = req.body.content;
    let author = req.body.author;
    let boardId = req.body.boardId;

    let sql = 'UPDATE board SET title=?, content=?, author=? WHERE id =?'

	client.query(sql, [title, content, author, boardId], function(err){

		res.redirect('/APIV0.2/post');
	})

})

router.get('/delete/:id', function(req, res){
    let postId = req.params.id;
    let sql = 'DELETE FROM board WHERE id=?';
	client.query(sql, [postId], function(err){
		res.redirect('/APIV0.2/post');
	});
})

router.get('/:id/post', function(req, res){
    var postId = req.params['id'];

    // 'SELECT *FROM board WHERE id =?', [postId]

    res.send('get test '  );
})

module.exports = router;
