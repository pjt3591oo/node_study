/**
 * Created by bagjeongtae on 2017. 7. 16..
 */

// http://kssong.tistory.com/26 가면 더 다양한 array 제공 함수를 볼 수 있음.

var array_test = ['1', '2', '3', '4']

console.log(array_test[0]);
console.log(array_test[1]);
console.log(array_test[2]);
console.log(array_test[3]);

console.log(array_test[array_test.length-1]);

array_test.push('10');
array_test.push('11');

console.log(array_test);
console.log(array_test.pop());
console.log(array_test.pop());

for(var index in array_test){
    console.log(index, array_test[index])
}

array_test.map(function(item, index){
    console.log(index, item)
});