var express = require('express');
var router = express.Router();
var fs = require("fs");
/* GET home page. */
var people = fs.readFileSync("./data/people.json","utf8");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'jesus christ',get:req.query,people:people});
});
router.get("/tranformaciones",(req,res)=>{
  res.render("tranf",{title:"tranformaciones css"});
});
module.exports = router;
