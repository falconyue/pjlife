var express = require('express');
var router = express.Router();
var db = require('../db_config.js');
/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('article/add');
});

router.post('/addsave', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  db.query('INSERT INTO article_list SET ?', req.body, function (error, results, fields) {
    if (error) console.log(JSON.stringify(error));
    res.send('article/add');
  });
});

module.exports = router;
