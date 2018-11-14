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
router.get("/noresponsivo",(req,res)=>{
  res.render("noresp",{title:"tranformaciones css"});
});
router.get("/responsivo1",(req,res)=>{
  res.render("resp1",{title:"tranformaciones css"});
});
router.get("/js1",(req,res)=>{
  res.render("js1",{title:"js 1"});
});
module.exports = router;
