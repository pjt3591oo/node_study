/**
 * Created by bagjeongtae on 2017. 8. 12..
 */

// callback hell의 문제점

let fs = require('fs');

let filename1 = 'c1.txt';
let filename2 = 'c2.txt';

fs.readFile(filename1, function(err, f1){
   console.log(f1.toString());
   fs.readFile(filename2, function(err, f2){
       console.log(f2.toString());
   });
});