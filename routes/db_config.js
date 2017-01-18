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

var pool = mysql.createPool(option);

exports.query = function(sql,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            conn.query(sql,function(qerr,vals,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(qerr,vals,fields);
            });
        }
    });
};
