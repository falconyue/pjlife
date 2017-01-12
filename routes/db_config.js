var mysql = require('mysql');
//填写数据库连接信息，可查询数据库详情页
var username = '96cf6c8d960a4891bb5f5547b9b5f8bb';//用户AK
var password = '6fcf80843a4b4511b83ac7204fb1a284';//用户SK
var db_host = 'sqld.duapp.com';
var db_port = 4050;
var db_name = 'lgwVTwmuhJkeGZtZsrRj';
var option = {
  host: db_host,
  port: db_port,
  user: username,
  password: password,
  database: db_name
}

var client = mysql.createConnection(option);

module.exports = client;
