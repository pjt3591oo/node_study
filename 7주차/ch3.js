/**
 * Created by bagjeongtae on 2017. 8. 12..
 */

// promise를 이용하여 콜백헬 해결

let fs = require('fs');

function readfile(filename){
    return new Promise( function(resolve, reject) {
        fs.readFile(filename, function(err, data){
            if(err) reject(err);
            resolve(data);
        })
    })
}

let filename1 = 'c1.txt';
let filename2 = 'c2.txt';

readfile(filename1).then( function(result) {
    console.log(result.toString());
    // return readfile(filename2);
    return 10101010;
}, function(err) {
    console.log(err);
}).then(function(result) {
    console.log(result.toString());
}, function(err) {
    console.log(err);
});