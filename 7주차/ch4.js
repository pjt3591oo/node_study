/**
 * Created by bagjeongtae on 2017. 8. 12..
 */

// Promise.all 함수 사용해보기

let fs = require('fs');

function readfile(filename){

    return new Promise( function(resolve, reject) {
        fs.readFile(filename, function(err, data){
            if(err) reject(err);
            resolve(data.toString());
        })
    })

}

Promise.all([readfile('c1.txt'), readfile('c2.txt')]).then( function(result) {
    console.log(result);
}, err => {
    console.log(err);
})