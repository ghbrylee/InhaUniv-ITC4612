var express = require('express');
var router = express.Router();

// 도서 검색 페이지
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName: 'books/search.ejs' });
});

module.exports = router;
