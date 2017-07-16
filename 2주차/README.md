# 2주차 강의

node.js 2주차 강의자료.

## 목차

1. javascript 문법
    
    1.1 조건분기
     
    1.2 반복문
    
    1.3 함수
    
    1.4 모듈
    
2. node.js
    
    2.2 간단한 웹 서버 띄워보기 
    
    2.1 express를 이용하여 서버생성 
    
    2.2 API 생성방법
    
## 1. javascript 문법

### 1.1. 조건분기

조건분기란 특정 조건이 만족(true)이 되면 해당 코드를 실행을 시키는 문법.

`키워드` : if 또는 if~ else if ~ else

`포인트` : 0 = false, 0을 제외한 수 = true

* `if_1.js`

```javascript
if(0){
    console.log('hello1');
}
if(1){
    console.log('world2');
}

if(1){
    console.log('hello3');
}
if(0){
    console.log('world4');
}
```

``` bash
$ node if_1.js
world2
hello3
```

if는 ()안에 들어있는 조건에 따라서 {}로 감싸져 있는 부분이 실행이 된다.

* `if_2.js`

```javascript
if(1){
    console.log('hello world1');
}else if(1){
    console.log('hello world2');

}else if(1){
    console.log('hello world3');
}else{
    console.log('last')
}
```

``` bash
$ node if_2.js
hello world1
```

* `if_2.js`

```javascript
if(0){
    console.log('hello world1');
}else if(1){
    console.log('hello world2');

}else if(1){
    console.log('hello world3');
}else{
    console.log('last')
}
```

``` bash
$ node if_2.js
hello world2
```

```javascript
if(0){
    console.log('hello world1');
}else if(0){
    console.log('hello world2');

}else if(0){
    console.log('hello world3');
}else{
    console.log('last')
}
```

``` bash
$ node if_3.js
last
```

if, else if, else는 중간에 조건이 true가 된다면 해당 조건문만 실행이 되고 else로 묶인 부분까지 건너 뛴다.

만약, 조건중에 true가 없다면 else 구문을 실행한다.

if, else if, else문을 활용한 if문은 프로그램을 논리적으로 설계하는데 매우 중요한 문법이다.

### 1.2. 반복문

반복문은 말 그대로 특정 코드를 반복적으로 실행을 시키기 위한 문법이다.

if문과 마찬가지로 프로그램을 논리적으로 설계하는데 매우 중요한 문법이다.


`키워드` : for

`포인트` : 탈출 조건을 잘 만드는 것이 중요!

* `loop_1.js`

```javascript
for(var i = 0 ; i< 10 ; i++){
    console.log('hello world', i);
}
```

```javascript
for(초기화 ; 조건 ; 증감){
    로직
}
```

```bash
$ node loop_1.js
hello world 0
hello world 1
hello world 2
hello world 3
hello world 4
hello world 5
hello world 6
hello world 7
hello world 8
hello world 9
```

* `loop_2.js`

```javascript
for(var i = 0 ; i< 10 ; i++){
    for(var j = 0 ; j < 10 ; j++){
        console.log(i + ' * ' + j + '=' + i * j);
    }
}
```

```bash
$ node loop_2.js
0 * 0=0
0 * 1=0
0 * 2=0
0 * 3=0
0 * 4=0
0 * 5=0
0 * 6=0
0 * 7=0
0 * 8=0
0 * 9=0
1 * 0=0
1 * 1=1
1 * 2=2
1 * 3=3
1 * 4=4
1 * 5=5
1 * 6=6
1 * 7=7
1 * 8=8
1 * 9=9
2 * 0=0
2 * 1=2
2 * 2=4
2 * 3=6
2 * 4=8
2 * 5=10
2 * 6=12
2 * 7=14
2 * 8=16
2 * 9=18
3 * 0=0
3 * 1=3
3 * 2=6
3 * 3=9
3 * 4=12
3 * 5=15
3 * 6=18
3 * 7=21
3 * 8=24
3 * 9=27
4 * 0=0
4 * 1=4
4 * 2=8
4 * 3=12
4 * 4=16
4 * 5=20
4 * 6=24
4 * 7=28
4 * 8=32
4 * 9=36
5 * 0=0
5 * 1=5
5 * 2=10
5 * 3=15
5 * 4=20
5 * 5=25
5 * 6=30
5 * 7=35
5 * 8=40
5 * 9=45
6 * 0=0
6 * 1=6
6 * 2=12
6 * 3=18
6 * 4=24
6 * 5=30
6 * 6=36
6 * 7=42
6 * 8=48
6 * 9=54
7 * 0=0
7 * 1=7
7 * 2=14
7 * 3=21
7 * 4=28
7 * 5=35
7 * 6=42
7 * 7=49
7 * 8=56
7 * 9=63
8 * 0=0
8 * 1=8
8 * 2=16
8 * 3=24
8 * 4=32
8 * 5=40
8 * 6=48
8 * 7=56
8 * 8=64
8 * 9=72
9 * 0=0
9 * 1=9
9 * 2=18
9 * 3=27
9 * 4=36
9 * 5=45
9 * 6=54
9 * 7=63
9 * 8=72
9 * 9=81
```

### 1.3. 함수

함수는 프로그램을 단위로 나누는 역할을 합니다. 모듈화를 하여 유지보수를 용이하게 해주는 장점이 있습니다.

`키워드` : function
`포인트` : 하나의 함수는 하나의 기능만 가지고 있어야 함.

* `function_1.js`

```javascript
function test(){          // 함수정의
    console.log('test');
}

function test1(a, b, c){  // 함수정의
    console.log(a, b, c);
}

test();          // 함수호출
test1(1);        // 함수호출
test1(1, 2);     // 함수호출
test1(1, 2, 3);  // 함수호출
```

함수 정의를 한 후 함수이름을 적으면 해당 함수가 호출이 됩니다.

### 1.4. 모듈

모듈이란 함수의 묶음을 의미 합니다.

`키워드 1` : module.exports = {}
`키워드 2` : require

* `sum.js`

```javascript
function sum(a, b, c){
	console.log('test123');
}
module.exports = {
	sum: sum
}

```

module.exports를 이용하여 외부에서 해당 파일을 require할 때 사용할 수 있도록 설정을 해주는 것을 의미 합니다.
{
    외부에 노출할 이름 : 외부에 노출할 객체(함수, 변수)
}
* `app.js`

```javascript
var test = require('./sum.js');

test.sum(1)
```

sum.js를 require하면 .sum을 이용하여 sum.js에 있는 sum() 함수를 사용할 수 있습니다.

만약 아래와 같이 코드가 작성되었다면...

```javascript
function sum(a, b, c){
	console.log('test123');
}
module.exports = {
	mung: sum
}
```

위와 같이 작성이 되어있다면 require후 `.mung()` 와 같은 형태로 작성을 해야합니다.


## 2. node.js

이제 본젹적인 웹서버에 대해서 다뤄보도록 하겠습니다.


### 2.1. 간단한 웹서버 띄워보기

express를 시작하기 앞서서 node.js에서 제공하는 http라는 모듈을 이용하여 간단한 웹 서버를 띄워보도록 하겠습니다.

* `simple_webserver.js`

```javascript
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
```

```bash
$ node simple_webserver.js
Server running at http://127.0.0.1:8888/
```
simple_webserver.js를 실행 시키면 터미널이 대기상태가 됩니다.

[http://127.0.0.1:8888/](http://127.0.0.1:8888/)을 접속해보도록 합니다.

위에서 **`function(req, res){}`** 처럼 이름이 없는 함수를 무명함수하고 합니다. 

이러한 무명 함수는 콜백함수를 만들때 사용이 됩니다.

콜백 함수란 특정 이벤트가 실행이 되면 호출이 되는 함수입니다.

### 2.2. express 맛보기

express는 node.js에서 서버를 편하게 만들수 있도록 도와주는 프레임워크입니다.

#### 2.2.1 express를 이용하여 프로젝트 생성 후 서버실행

```bash
$ express [프로젝트 명]
```

이러한 형태로 프로젝트를 생성할 수 있습니다.

```bash
$ express project # 프로젝트 생성

  warning: the default view engine will not be jade in future releases
  warning: use `--view=jade' or `--help' for additional options

   create : a
   create : a/package.json
   create : a/app.js
   create : a/public
   create : a/routes
   create : a/routes/index.js
   create : a/routes/users.js
   create : a/views
   create : a/views/index.jade
   create : a/views/layout.jade
   create : a/views/error.jade
   create : a/bin
   create : a/bin/www
   create : a/public/javascripts
   create : a/public/images
   create : a/public/stylesheets
   create : a/public/stylesheets/style.css

   install dependencies:
     $ cd a && npm install

   run the app:
     $ DEBUG=a:* npm start

$ cd project      # 생성된 프로젝트 디렉토리(폴더)로 이동
$ npm install     # 의존모듈 설치
$ node ./bin/www  # 서버 실행
```

express를 이용하여 프로젝트를 생성하면 어떤 파일이 생성이 되었는지 쭉 나열이 됩니다.

그리고 install dependencies 부분에 `$ cd a && npm install` 라고 되어있습니다. 해당 디렉토리로 이동을 하고 npm install을 하라고 알려줍니다.

[http://127.0.0.1:8888/](http://127.0.0.1:8888/)

[http://127.0.0.1:8888/users](http://127.0.0.1:8888/users)
 
 
#### 2.2.2 생성된 프로젝트의 디렉토리 구조

* `프로젝트 구조`

```bash
bin/
    www
public/
    images
    javascripts
    stylesheets
routes/
    index.js
    users.js
views/
    error.jade
    index.jade
    layout.jade

app.js
package.json
```

* `package.json`

```json
{
  "name": "node_board",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.17.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.3",
    "express": "~4.15.2",
    "jade": "~1.11.0",
    "morgan": "~1.8.1",
    "serve-favicon": "~2.4.2"
}
}
```

package.json 파일은 해당 프로젝트의 정보가 들어있는 파일입니다.

npm install을 하게되면 package.json에 있는 dependencies에 있는 모듈들이 설치가 됩니다.

설치가 된 모듈은 해당 프로젝트 디렉토리(폴더) 내부에 node_modules라는 디렉토리(폴더)가 생성이 되고 해당 디렉토리 내부에 모듈이 설치가 됩니다.

* `app.js`

서버가 동작될때 필요한 각종 설정이 들어있습니다.

```javascript
//...생략...

var index = require('./routes/index');  // 8 line
var users = require('./routes/users');  // 9 line

//...생략...

app.use('/', index);                    // 25 line
app.use('/users', users);               // 26 line

//...생략...
```

직접 코드를 작성을 하는 부분

주소 뒤에 /가 있으면 ./routes/index가 호출

주소 뒤에 /users가 있으면 ./routes/users가 호출

* `./routes/파일.js`

```javascript
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource1');
  res.json({});
  res.render('index', {});
});

module.exports = router;
```

routes에 있는 파일들은 위와같은 형태로 코드가 작성되어 있음.

* `views`

html과 같은 프론트 단을 만들어 주는 코드가 포함되어 있습니다.

해당 프로젝트에서는 jade라는 템플릿 엔진을 사용하여 html을 대신할 것입니다.

* `routes`

routes는 실제 서버 로직파일이 들어있는 디렉토리(폴더)입니다.


* `public`

public은 웹 페이지를 만들때 사용되는 css, javascript, image 파일과 같은 리소스를 가지고 있는 디렉토리(폴더) 입니다.

* `bin`

bin에는 서버를 실행할 수 있는 www라는 파일이 있습니다

서버를 실행할땐 www를 실행합니다.

