/**
 * Created by bagjeongtae on 2017. 8. 12..
 */

// promise를 이용하여 콜백헬 해결

let fs = require('fs');

function readfile(filename){
    return new Promise( (resolve, reject) => {
        fs.readFile(filename, function(err, data){
            if(err) reject(err);
            resolve(data);
        })
    })
}

let filename1 = 'c1.txt';
let filename2 = 'c2.txt';

readfile(filename1).then(result => {
    console.log(result.toString());
    // return readfile(filename2);
    return 10101010;
}, err => {
    console.log(err);
}).then(result => {
    console.log(result.toString());
}, err => {
    console.log(err);
});