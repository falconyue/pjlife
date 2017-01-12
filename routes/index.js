var express = require('express');
var router = express.Router();
var db = require('./db_config.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  // db.query('select * from pjlife_article order by add_time desc', function(err, items) {
  //   if(err) console.log(JSON.stringify(err));
  //   res.render('index', {article_list: items});
  // })
  res.send('hello openshift!')
});

router.get('/article', function(req, res, next) {
  var id = req.query.id;
  db.query('select * from pjlife_article where id = ?', id, function(err, items) {
    if(items) {
      res.render('article', {article: items[0]});
    }
  })
});

Date.prototype.Format = function (fmt) { //author: meizz
	var o = {
	"M+": this.getMonth() + 1, //月份
	"d+": this.getDate(), //日
	"h+": this.getHours(), //小时
	"m+": this.getMinutes(), //分
	"s+": this.getSeconds(), //秒
	"q+": Math.floor((this.getMonth() + 3) / 3), //季度
	"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt))
	fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
	if (new RegExp("(" + k + ")").test(fmt))
	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
module.exports = router;
