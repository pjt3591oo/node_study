/**
 * Created by bagjeongtae on 2017. 8. 12..
 */

// function을 이용하여 callback hell 해결


let fs = require('fs');

function read4(){
    fs.readFile('c4.txt', function(err, f2){
        console.log(f2.toString());
    })
}
function read3(){
    fs.readFile('c3.txt', function(err, f2){
        console.log(f2.toString());
        read4();
    })
}
function read2(){
    fs.readFile('c2.txt', function(err, f2){
        console.log(f2.toString());
        read3();
    })
}

function read1() {
    fs.readFile('c1.txt', function (err, f1) {
        console.log(f1.toString());
        read2();
    });
}

read1();

