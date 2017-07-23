# 4주차 강의

node.js 4주차 강의자료.

## 목차

1. database의 이해 1
    
    1.1. 데이터베이스 생성
    
    1.2. 테이블생성
    
2. database의 이해 2
    
    2.1. insert
     
    2.2. select
    
    2.3. update
    
    2.4. delete
    
3. node.js에서 mysql 연동하기

## 1. database의 이해1

database의 사용하기 위해서는 database에 접속을 해야한다. 

윈도우와 맥, 리눅스는 각각 접속하는 방법에 맞추어 접속을 하도록 한다.

```bash
mysql > 
```

터미널창이 위와같은 형태로 나타나면 db에 접속이 된 것이다.

### 1.1. 데이터 베이스 생성 및 조회

* 데이터 베이스 리스트 조회

키워드 : SHOW
포인트 : DATABASES 마지막에 s가 붙는다.

```bash
mysql > SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.01 sec)
```

SHOW를 이용하면 데이터 베이스를 조회할 수 있습니다.

데이터 베이스를 엑셀로 비유를 하면 스프레드시트와 같은 개념입니다.

* 데이터 베이스 생성

키워드 : CREATE DATABASE

```bash
mysql > CREATE DATABASE coding_apple;
Query OK, 1 row affected (0.00 sec)
```

이 부분은 엑셀에서 스프레드시트를 생성을 하는 것과 같은 개념입니다.

```bash
mysql> CREATE DATABASE coding_apple;
ERROR 1007 (HY000): Can't create database 'coding_apple'; database exists
```

데이터 베이스의 이름은 중복을 허용하지 않습니다. 이미 존재하는 데이터 베이스를 생성을 한다면 위와같이 존재하는 데이터이기 때문에 에러가 발생한다.

* 데이터 베이스 선택

키워드 : USE

```bash
mysql> USE coding_apple;
Database changed
```

데이터 베이스를 선택을 해줍니다. 

이제부터 조작되는 쿼리는 `USE`로 선택된 데이터 베이스에 있는 테이블 조작이 됩니다.


### 1.2. 테이블 생성및 조회

데이터 베이스 선택을 했으면 이젠 실제로 데이터가 저장되는 테이블 생성을 해야 합니다.

* 테이블 생성

키워드 : CREATE TABLE

[컬럼타입 종류](https://dev.mysql.com/doc/refman/5.7/en/storage-requirements.html)


```bash
mysql> CREATE TABLE apple1(
-> column1 INT(255) NOT NULL,
-> column2 VARCHAR(255)
);
```


* 테이블 리스트 조회

키워드 : SHOW TABLES

```bash
mysql> SHOW TABLES;
+------------------------+
| Tables_in_coding_apple |
+------------------------+
| apple1                 |
+------------------------+
1 rows in set (0.00 sec)
```

* 특정 테이블 정보조회

키워드 : DESC [table_name]

```bash
mysql> DESC apple1;
+---------+--------------+------+-----+---------+-------+
| Field   | Type         | Null | Key | Default | Extra |
+---------+--------------+------+-----+---------+-------+
| column1 | int(255)     | YES  |     | NULL    |       |
| column2 | varchar(255) | YES  |     | NULL    |       |
+---------+--------------+------+-----+---------+-------+
2 rows in set (0.01 sec)
```

## 2. database의 이해 2

### 2.1. INSERT

키워드 : INSERT INTO 

문법 : INSERT INTO [table_name](column_name, column_name) VALUES(value, value);

* 데이터 생성

```bash
mysql> INSERT INTO apple1(column1, column2) VALUES(3,1);
Query OK, 1 row affected (0.02 sec)
```

### 2.2. SELECT

키워드 : SELECT 

문법 : SELECT column_name, column_name FROM [table_name];

* 데이터 조회

```bash
mysql> SELECT *FROM apple1;
+---------+---------+
| column1 | column2 |
+---------+---------+
|       3 | 1       |
|       3 | 1       |
|       3 | 3       |
|       4 | 5       |
|       4 | 6       |
|       1 | 2       |
+---------+---------+
6 rows in set (0.00 sec)
```

데이터 베이스에서 SELECT에는 다양한 옵션을 제공하고 있습니다.

* 1.필터링

키워드 : WHERE

```bash
mysql> SELECT *FROM apple1 WHERE column1 > 3;
+---------+---------+
| column1 | column2 |
+---------+---------+
|       4 | 5       |
|       4 | 6       |
+---------+---------+
2 rows in set (0.01 sec)
```

* 오름차순, 내림차순 정렬

키워드 : ORDER BY

문법 : 

1. 오른차순 : ORDER BY 정렬시킬 컬럼 ASC
2. 내림차순 : ORDER BY 정렬시킬 컬럼 DESC 
    

```bash
mysql> SELECT *FROM apple1 ORDER BY column1 ASC;
+---------+---------+
| column1 | column2 |
+---------+---------+
|       1 | 2       |
|       3 | 1       |
|       3 | 1       |
|       3 | 3       |
|       3 | 1       |
|       4 | 5       |
|       4 | 6       |
+---------+---------+
7 rows in set (0.00 sec)
```

```bash
mysql> SELECT *FROM apple1 ORDER BY column1 DESC;
+---------+---------+
| column1 | column2 |
+---------+---------+
|       4 | 5       |
|       4 | 6       |
|       3 | 1       |
|       3 | 1       |
|       3 | 3       |
|       3 | 1       |
|       1 | 2       |
+---------+---------+
7 rows in set (0.00 sec)
```

* 데이터 출력 제한

키워드 : LIMIT

문법 : LIMIT start, end

```bash
mysql> SELECT *FROM apple1 LIMIT 2, 3;
+---------+---------+
| column1 | column2 |
+---------+---------+
|       3 | 3       |
|       4 | 5       |
|       4 | 6       |
+---------+---------+
3 rows in set (0.00 sec)
```

* 옵션 조합하여 사용하기

필터링 후 2개를 출력 한 다음에 정렬하기

```bash
mysql> SELECT *FROM apple1 WHERE column1 > 1 ORDER BY column2 ASC LIMIT 2, 3;
+---------+---------+
| column1 | column2 |
+---------+---------+
|       3 | 1       |
|       3 | 3       |
|       4 | 5       |
+---------+---------+
3 rows in set (0.00 sec)
```

### UPDATE

키워드 : UPDATE

문법 : UPDATE [table_name] SET column_name = value WHEHE 조건

```bash
mysql> SELECT *FROM apple1;
+---------+---------+
| column1 | column2 |
+---------+---------+
|       3 | 1       |
|       3 | 1       |
|       3 | 3       |
|       4 | 5       |
|       4 | 6       |
|       1 | 2       |
|       3 | 1       |
+---------+---------+
7 rows in set (0.00 sec)

mysql> UPDATE apple1 SET column1 = 200 WHERE column1=1;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT *FROM apple1;
+---------+---------+
| column1 | column2 |
+---------+---------+
|       3 | 1       |
|       3 | 1       |
|       3 | 3       |
|       4 | 5       |
|       4 | 6       |
|     200 | 2       |
|       3 | 1       |
+---------+---------+
7 rows in set (0.00 sec)
```

* WHERE를 하지 않았을 때

```bash
mysql> UPDATE apple1 SET column1 = 200;
Query OK, 6 rows affected (0.00 sec)
Rows matched: 7  Changed: 6  Warnings: 0

mysql> SELECT *FROM apple1;
+---------+---------+
| column1 | column2 |
+---------+---------+
|     200 | 1       |
|     200 | 1       |
|     200 | 3       |
|     200 | 5       |
|     200 | 6       |
|     200 | 2       |
|     200 | 1       |
+---------+---------+
7 rows in set (0.00 sec)

```

UPDATE시 WHERE를 넣지 않는다면 모든 row가 다 바뀔것이다.


### DELETE

키워드 : DELETE

문법 : DELETE FROM [table_name] WHERE 조건

```bash
mysql> SELECT *FROM apple1;
+---------+---------+
| column1 | column2 |
+---------+---------+
|     200 | 1       |
|     200 | 1       |
|     200 | 3       |
|     200 | 5       |
|     200 | 6       |
|     200 | 2       |
|     200 | 1       |
+---------+---------+
7 rows in set (0.00 sec)

mysql> DELETE FROM apple1 WHERE column2 = 6;
Query OK, 1 row affected (0.00 sec)

mysql> SELECT *FROM apple1;
+---------+---------+
| column1 | column2 |
+---------+---------+
|     200 | 1       |
|     200 | 1       |
|     200 | 3       |
|     200 | 5       |
|     200 | 2       |
|     200 | 1       |
+---------+---------+
6 rows in set (0.01 sec)
```

column2가 6인 row를 delete 합니다.

* WHERE를 하지 않았을 때

```bash
mysql> SELECT *FROM apple1;
+---------+---------+
| column1 | column2 |
+---------+---------+
|     200 | 1       |
|     200 | 1       |
|     200 | 3       |
|     200 | 5       |
|     200 | 2       |
|     200 | 1       |
+---------+---------+
6 rows in set (0.01 sec)

mysql> DELETE FROM apple1;
Query OK, 6 rows affected (0.01 sec)

mysql> SELECT *FROM apple1;
Empty set (0.00 sec)
```

where를 넣지 않는다면 모든 row가 다 delete된다.
 

## node.js에서 mysql 연동하기

* mysql 모듈설치

```bash
$ npm install mysql 
```

* node에서 mysql 연결설정

```javascript
const mysql = require('mysql');

const qwerr = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '11111111',
	database: 'coding_apple'
});
```

* 쿼리날려보기

```javascript
// select
qwerr.query('SELECT *FROM apple1 WHERE column1 = ?',[1], function(err, data){
	console.log(err);
	console.log(data); 
});

// select
qwerr.query('SELECT *FROM apple1 WHERE column1 = 1',[], function(err, data){
	console.log(err);
	console.log(data);
});

// inserts
qwerr.query('INSERT INTO apple1(column1, column2) VALUES (?, ?)', [1,2], function(err){
	console.log(err);
});

// insert
qwerr.query('INSERT INTO apple1(column1, column2) VALUES (1,2)', [], function(err){
	console.log(err);
});
```