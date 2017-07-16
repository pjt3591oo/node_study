/**
 * Created by bagjeongtae on 2017. 7. 16..
 */

var fs = require('fs'); 

console.log('before');  

fs.readFile('file.txt', function(err, data){ 
    if(err) {
        console.log(err);
    }else{ 
        console.log(data);
    }
 }); 

 console.log('success');