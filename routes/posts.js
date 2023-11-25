var express = require("express");
var router = express.Router();

//게시글
router.get("/", function (req, res) {
  res.render("index", { title: "게시글", pageName: "posts/list.ejs" });
});

//글쓰기
router.get("/insert", function (req, res) {
  res.render("index", { title: "글쓰기", pageName: "posts/insert.ejs" });
});

//게시물
router.get("/read", function (req, res) {
  const id = req.query.id;
  res.render("index", {
    title: "게시글정보",
    pageName: "posts/read.ejs",
    id: id,
  });
});

module.exports = router;
