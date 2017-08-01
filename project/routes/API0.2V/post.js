var express = require('express');
var router = express.Router();

// get     전체 글 보기, 특정 글 보기
// post    글 쓰기
// put     글 수정
// delete  글 삭제

// table name : board

router.get('/', function(req, res){
    let page = req.query.page || 1;

    // SELECT *FROM board ;
    res.send('get test');
})

router.post('/', function(req, res){
    let title = req.body.title;
    let content = req.body.content;

    // 'INSERT INTO board(title, content) VALUES(?, ?)', [title, content]

    res.send('post test');
})

router.put('/', function(req, res){
    let title = req.body.title;
    let content = req.body.content;
    let postId = req.body.postId;

    //'UPDATE board SET title=?, content=? WHERE id =?'  , [title, content, postId]

    res.send('put test');
})

router.delete('/', function(req, res){
    let postId = req.body.postId;

    // 'DELETE FROM board WHERE id=?', [postId]

    res.send('delete test');
})

router.get('/:id/post', function(req, res){
    var postId = req.params['id'];

    // 'SELECT *FROM board WHERE id =?', [postId]

    res.send('get test '  );
})

module.exports = router;
