let fs = require('fs');

function d(filename){
    return new Promise(function(resolve, reject){
        fs.readFile(filename, function(err,data){
            if(err) reject(err);
            else resolve(data.toString());
        })
    })
}

d('c1.txt').then(function(result){
    return;
}, function(err){
    return
}).then(function(result){

    return;
}, function(err){
    return ;
}).then(function(result){
    return ;
}, function(err){

})

function a(p){
    fs.readFile(p, function(err,data){
        console.log(p);
        // if(err) reject(err);
        console.log(data)
    })
}

Promise.all(
    [d('c1.txt'), d('c2.txt'), d('c3.txt'), d('c3.txt')]
).then(function(result){
    console.log(result)
})
