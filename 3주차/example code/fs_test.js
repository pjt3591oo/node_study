const fs = require('js')
var array_test = ['1', '2', '3', '4']
// var json = {key1: 1, key2: [1,2,3,], key3: {'name':asdf, id, ds}}

var key = 'key2'

// console.log(array_test.reverse()[0])
// console.log(json[key])

array_test.push('10')
array_test.push('11')

array_test.map(function(item, index){
    console.log(index, item)
});

console.log('test')
var i = [{}, {}, {}, {}];

i.map(function(item, index){
    console.log(item, index)
})

function test(a){
    for(var i in [1,2,3,4, 5]){
        var a = 10;
        console.log(a)
    }
}

const i = 10;
