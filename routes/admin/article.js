var express = require('express');
var router = express.Router();
var db = require('../db_config.js');
/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('article/add');
});

router.post('/addsave', function(req, res, next) {
  db.query('INSERT INTO pjlife_article SET ?', req.body, function (error, results, fields) {
    if (error) console.log(JSON.stringify(error));
    res.render('article/add');
  });
});

module.exports = router;
