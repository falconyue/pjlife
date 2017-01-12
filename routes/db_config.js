var mysql = require('mysql');
//填写数据库连接信息，可查询数据库详情页
var username = 'user2O2';//用户AK
var password = 'p4iL4s4vOhYcu7nR';//用户SK
var db_host = 'mysql://mysql';
var db_port = 3306;
var db_name = 'sampledb';
var option = {
  host: db_host,
  port: db_port,
  user: username,
  password: password,
  database: db_name
}

var client = mysql.createConnection(option);

module.exports = client;
