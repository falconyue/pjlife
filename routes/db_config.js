var mysql = require('mysql');
//填写数据库连接信息，可查询数据库详情页
var username = 'userLTL';//用户AK
var password = 'Fy8LmKCCaMchQN3F';//用户SK
var db_host = process.env.MYSQL_SERVICE_HOST;
var db_port = process.env.MYSQL_SERVICE_PORT;
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
