# 7주차 강의

node.js 7주차 강의자료.

## 목차

1. 비동기 패턴 문제
2. 비동기 패턴 해결 - 1
3. 비동기 패턴 해결 - 2


## 1. 비동기 패턴 문제
 
node.js는 효율을 위해 비동기 방식으로 코드를 작성합니다. 코드를 콜백 구조로 작성을 하게됩니다.

```js
const fs = require('fs');

fs.readFile('c1.txt', function(err, data){
    if(err) console.log('err 발생 : ' + err);
    else console.log(data.toString();)
})
```

앞의 코드처럼 콜백이 하나만 있다면 코드의 가독이 떨어지지 않습니다.

```js
const fs = require('fs');
fs.readFile('c1.txt', function(err, data){
    if(err) console.log('err 발생 : ' + err);
    else console.log(data.toString());
})

console.log('when running');
```

해당 코드를 실행하면 'when running'가 더 빨리 실행이 될 수 있습니다. 파일을 읽고 해당 'wen running'을 실행하고 싶다면 해당 코드를 콜백안으로 넣어야 합니다.

```js
const fs = require('fs');

fs.readFile('c1.txt', function(err, data){
    if(err) console.log('err 발생 : ' + err);
    else {
        console.log(data.toString());
        console.log('when running');
    }
})
```

다음으로 문제는 여러개의 파일을 읽을 때 입니다.

```js
const fs = require('fs');

fs.readFile('c1.txt', function(err, data){
    if(err) console.log('err 발생 : ' + err);
    else {
        console.log(data.toString());
    }
})

fs.readFile('c2.txt', function(err, data){
    if(err) console.log('err 발생 : ' + err);
    else {
        console.log(data.toString());
    }
})
```

앞의 코드는 c1.txt와 c2.txt를 읽는 코드입니다. 하지만 c1.txt와 c2.txt 둘중 어느 코드가 먼저 실행될지 예측이 불가능 합니다. c1.txt을 읽고 c2.txt를 읽고 싶다면 콜백안에 콜백을 넣어야 합니다.
 
 ```js
const fs = require('fs');
fs.readFile('c1.txt', function(err, data){
    if(err) console.log('err 발생 : ' + err);
    else {
        console.log(data.toString());
        fs.readFile('c2.txt', function(err, data){
            if(err) console.log('err 발생 : ' + err);
            else {
                console.log(data.toString());
            }
        })
    }
})
```

이런식으로 해야 c1.txt를 읽고 c2.txt를 읽습니다. 

근데 문제는 코드의 복잡도가 늘어날 수록 즉 콜백 함수를 써야하는 상황이 많아질수록 점점 안으로 들어가게 될 것입니다.

 ```js
const fs = require('fs');
fs.readFile('c1.txt', function(err, data){
    if(err) console.log('err 발생 : ' + err);
    else {
        console.log(data.toString());
        fs.readFile('c2.txt', function(err, data){
            if(err) console.log('err 발생 : ' + err);
            else {
                console.log(data.toString());
                fs.readFile('c3.txt', function(err, data){
                    if(err) console.log('err 발생 : ' + err);
                    else {
                        console.log(data.toString());
                        fs.readFile('c4.txt', function(err, data){
                            if(err) console.log('err 발생 : ' + err);
                            else {
                                console.log(data.toString());
                                fs.readFile('c5.txt', function(err, data){
                                    if(err) console.log('err 발생 : ' + err);
                                    else {
                                        console.log(data.toString());
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})
```

코드가 고작 20~30줄정도 밖에 되지 않는데 들여쓰기(탭, 스페이스)가 엄청나게 들어갔습니다. 코드가 점점 화살표 모양으로 나타나게 됩니다.
 

### 2. 비동기 문제 해결 - 1

앞에 나타난 문제를 해결하는 방법중 하나는 함수를 이용하여 해결을 합니다.

```js
const fs = require('fs');

function read4(){
    fs.readFile('c4.txt', function(err, data){
        if(err) console.log('err 발생 : ' + err);
        else {
            console.log(data.toString());
        }
    })
}
function read3(){
    fs.readFile('c3.txt', function(err, data){
        if(err) console.log('err 발생 : ' + err);
        else {
            console.log(data.toString());
            read4();
        }
    })
}
function read2(){
    fs.readFile('c2.txt', function(err, data){
        if(err) console.log('err 발생 : ' + err);
        else {
            console.log(data.toString());
            read3();
        }
    })
}
function read1(){
    fs.readFile('c1.txt', function(err, data){
        if(err) console.log('err 발생 : ' + err);
        else {
            console.log(data.toString());
            read2(); 
        }
    })
}

read1();
```

우측으로 콜백이 들어가있는 현상보다는 훨씬 좋아졌습니다.


### 3. 비동기 문제 해결 - 2

다음으로는 promise 패턴을 이용하여 비동기 문제를 해결할 수 있습니다.

### 3.1. promise의 기본구조

```js
function _P(){
    return new Promise( function(resolve, reject){
        resolve(); // 정상적으로 처리됬을 때 호출
        reject(); // error 났을 때 호출
    })
}

_P().then(function(result){
    //_P에서 resolve() 호출할 때 넘긴 인자를 result로 받는다. 데이터가 넘어온다
}, function(err){
    // _P에서 reject() 호풀할 때 넘긴 인자를 err로 받는다.
})
```

_P()는 promise 객체를 생성해주는 함수 입니다. promise 객체는 then을 이용하여 데이터 처리를 합니다 

> Promise를 사용할 땐 P를 대문자로 작성을 해야 합니다. 대, 소문자를 주의합시다!

```js
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

readfile(filename1).then(function(result) {
    console.log(result.toString());
    return 10101010;
}, function(err) {
    console.log(err);
}).then(function(result) {
    console.log(result.toString());
}, function(err) {
    console.log(err);
});
```
 
then의 콜백함수에서 return을 하면 다음 then으로 데이터를 넘깁니다.
 
then에서 return을 할 때 일반 상수도 가능하지만 promise 객체를 리턴할 수 있습니다.

```js
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

readfile(filename1).then(function(result) {
    console.log(result.toString());
    return readfile(filename2);
}, function(err) {
    console.log(err);
}).then(function(result) {
    console.log(result.toString());
}, function(err) {
    console.log(err);
});
```

promise의 then을 이용하면 콜백을 중첩했을 때 처럼 비동기를 순차적으로 순서를 보장받으며 처리가 가능합니다.

하지만 특정 프로세스를 처리할 때 굳이 순서를 보장받지 않고 처리해야할 것들이 성공적으로 처리가 됬을 때 넘어가는 경우도 있습니다. 이럴때는 promise의 all을 이용하면 됩니다.

```js
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
```

처리해야할 일들을 리스트로 만들어서 all에 넘겨주면 Promise는 이를 순차적으로가 아닌 비동기적으로 처리를 시작합니다. 그리고 모든게 처리가 완료됐을 때 then의 콜백을 호출합니다.
 
