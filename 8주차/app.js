/**
 * Created by bagjeongtae on 2017. 8. 19..
 */
var fs = require('fs');
var express = require('express')
//
// ****** 첫 번쨰 방법 시작
var multer = require('multer')
var upload = multer({ dest: './uploads/' });
// ****** 첫 번째 방법 끝

//****** 두 번째 방법 시작
// let multer = require('multer');
// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//         console.log('file name');
//         console.log(file);
//         cb(null, file.originalname);
//     }
// });
// var upload = multer({storage});
// ****** 두 번째 방법 끝

var app = express();

app.post('/profile', upload.array(), function (req, res, next) {
  // req.body contains the text fields
});

app.get('/', function (req, res) {
    fs.readFile('./index.html', function (err, data) {
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });

});

// accept one file where the name of the form field is named photho
app.post('/photos', upload.single('myFile'), function (req, res) {
    console.log(req.body); // form fields
    console.log(req.file); // form files
    res.status(204).end()
});

app.listen(3000, function () {
    console.log('a');
});
